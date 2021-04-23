export class SiteCatalystService {
  constructor(appName, albumId) {
    this.appName = appName;
    this.albumId = albumId;
    this.name = 'sitecatalyst';
  }

  get albumId() {
    return this._albumId;
  }

  set albumId(albumId) {
    this._albumId = albumId;
  }

  trackPageview(ev) {
    let useLv5;
    let lvls;
    if (ev.detail.pagename.includes(':')) {
      useLv5 = true;
      lvls = ev.detail.pagename.split(':');
    }
    const data = {
      taxonomy: {
        level1: 'coaf',
        level2: 'ms',
        level3: this.appName,
        level4: useLv5 ? lvls[0] : ev.detail.pagename,
        level5: useLv5 ? lvls[1] : '',
        country: 'us',
        language: 'english',
        system: 'music_store',
      },
      applicationId: this.albumId,
    };
    if (ev.detail.start) {
      data.taxonomy.application = {
        start: ev.detail.start,
      };
    }
    if (ev.detail.completed) {
      data.taxonomy.application = {
        completed: ev.detail.completed,
      };
    }
    window.publisherFW.publishEvent('trackAnalytics', data);
  }

  trackClick(elem) {
    const name = elem.getAttribute('data-track');
    window.publisherFW.publishEvent('trackAnalytics', {
      name,
    });
  }

  trackEvent(ev) {
    window.publisherFW.publishEvent('trackAnalytics', {
      name: ev.detail.name,
      dealerId: ev.detail.value || '',
    });
  }
}
