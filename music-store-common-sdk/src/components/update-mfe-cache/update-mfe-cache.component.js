export class MusicStoreUpdateMfeCache extends HTMLElement {
  constructor() {
    super();
    this.sw = navigator.serviceWorker && navigator.serviceWorker.controller;
  }

  connectedCallback() {
    this.mfe = this.getAttribute('mfe-name') || '';
    this.sendMessageToSw();
  }

  sendMessageToSw() {
    if (this.mfe && this.sw) {
      this.sw.postMessage(this.mfe);
    }
  }
}
