import { availableAnalytics } from './utils/constants.js';
import { loadScript } from '../utils/load-script.js';
import { PotomacService } from './services/potomac.service.js';
import { SiteCatalystService } from './services/site-catalyst.service.js';
import { trackAnalyticsEvent } from '../utils/track-analytics-event.js';

export class MusicStoreAnalytics {
  constructor(appName, analyticsList = [], albumId = '') {
    this.analyticsQueue = [];
    this.activeLibs = [];
    this.availableAnalytics = availableAnalytics;
    this.isProd = window.location.host === 'musicstore.com';
    this.albumId = albumId;
    this.appName = appName;
    this.trackedTests = [];
    this.addListeners();
    this.init(analyticsList);
  }

  get albumId() {
    return this._albumId;
  }

  set albumId(albumId) {
    this._albumId = albumId;
    this.activeLibs.forEach(lib => {
      const _lib = lib;
      _lib.albumId = this.albumId;
    });
  }

  addListeners() {
    this.boundTrackVisibility = this.trackVisibility.bind(this);
    document.addEventListener('ms-track-pageview', this.trackPageview.bind(this));
    document.addEventListener('click', this.trackClick.bind(this));
    document.addEventListener('ms-track-event', this.trackEvent.bind(this));
    document.addEventListener('at-request-succeeded', this.trackTargetTest.bind(this));
    window.addEventListener('visibilitychange', this.boundTrackVisibility);
  }

  async init(analyticsList) {
    for (let i = 0; i < analyticsList.length; i += 1) {
      const item = analyticsList[i];
      const found = this.availableAnalytics.find(available => available.name === item);
      /* eslint-disable no-await-in-loop */
      await this.importAnalyticsScript(found);
    }
  }

  async importAnalyticsScript(analytics) {
    const src = this.isProd ? analytics.prod : analytics.nonprod || analytics.prod;
    const analyticsScript = document.querySelector(`[src="${src}"]`);
    const analyticsInit = this.initAnalyticsLib.bind(this);
    if (!analyticsScript) {
      const scriptTag = await loadScript(src, analytics.name);
      scriptTag.addEventListener('load', function onLoad() {
        analyticsInit(analytics);
        scriptTag.removeEventListener('load', onLoad);
      });
    } else {
      try {
        this.initAnalyticsLib(analytics);
      } catch {
        analyticsScript.addEventListener('load', function onLoad() {
          analyticsInit(analytics);
          analyticsScript.removeEventListener('load', onLoad);
        });
      }
    }
  }

  initAnalyticsLib({ name }) {
    switch (name.toLowerCase()) {
      case 'potomac': {
        const potomac = new PotomacService(this.isProd, this.albumId);
        this.activeLibs.push(potomac);
        break;
      }
      case 'sitecatalyst': {
        const sitecatalyst = new SiteCatalystService(this.appName, this.albumId);
        this.activeLibs.push(sitecatalyst);
        break;
      }
      default:
        if (!this.isProd) {
          console.warn(`${name} is not a valid library`);
        }
    }
    const foundInQueue = this.analyticsQueue.filter(queued => !queued.lib || queued.lib.name === name);
    foundInQueue.forEach(queued => {
      const activeLib = this.activeLibs.find(lib => lib.name === name);
      if (queued.type in activeLib) {
        activeLib[queued.type](queued.data);
      }
    });
  }

  removeVisibilityTracker() {
    window.removeEventListener('visibilitychange', this.boundTrackVisibility);
  }

  trackPageview(ev) {
    if (ev.detail.pagename) {
      this.publish(ev, 'trackPageview');
    } else if (!this.isProd) {
      console.warn('trackPageview event detail did not contain pagename', ev);
    }
  }

  trackClick(ev) {
    const trackElem = this._findDataTrack(ev);
    if (trackElem) {
      this.publish(trackElem, 'trackClick');
    }
  }

  trackEvent(ev) {
    if (ev.detail.name) {
      this.publish(ev, 'trackEvent');
    } else if (!this.isProd) {
      console.warn('trackEvent event detail did not contain name', ev);
    }
  }

  trackTargetTest(ev) {
    const responseToken = ev.detail.responseTokens && ev.detail.responseTokens[0];
    if (responseToken) {
      const activityName = responseToken['activity.name'];
      const experienceName = responseToken['experience.name'];
      if (!this.trackedTests.some(test => test.activityName === activityName && test.experienceName === experienceName)) {
        const testExp = `${activityName} ${experienceName}`;
        trackAnalyticsEvent(testExp);
        this.trackedTests.push({ activityName, experienceName });
      }
    }
  }

  trackVisibility(ev) {
    const name = ev.target.visibilityState === 'hidden' ? 'tabbed away' : 'tabbed back';
    trackAnalyticsEvent(name);
  }

  publish(data, type) {
    if (this.activeLibs.length === 0) {
      this.analyticsQueue.push({ type, data });
    }
    this.activeLibs.forEach(lib => {
      if (type in lib) {
        try {
          lib[type](data);
        } catch {
          this.analyticsQueue.push({ lib, type, data });
        }
      }
    });
  }

  _findDataTrack(ev) {
    const path = ev.composedPath();
    const hasDataTrack = path.find(elem => elem.hasAttribute && elem.hasAttribute('data-track'));
    return hasDataTrack;
  }
}
