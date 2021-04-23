import { loadScript } from '../utils/load-script.js';

export class MusicStoreChat {
  constructor(albumId = '') {
    this.importChatTag('https://api.salemove.com/salemove_integration.js', 'salemoveScript');
    this.isProd = window.location.host === 'musicstore.com';
    this.albumId = albumId;
    this.chatApi = {};
  }

  async importChatTag(src, scriptId) {
    if ('sm' in window) {
      this.getChatApi();
    } else {
      const getChatApi = this.getChatApi.bind(this);
      const chatScriptTag = await loadScript(src, scriptId);
      chatScriptTag.addEventListener('load', function onLoad() {
        getChatApi();
        chatScriptTag.removeEventListener('load', onLoad);
      });
    }
  }

  async getChatApi() {
    this.chatApi = await window.sm.getApi({ version: 'v1' });
  }
}
