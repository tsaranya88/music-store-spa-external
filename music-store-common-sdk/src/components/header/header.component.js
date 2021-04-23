import { html, LitElement } from 'lit-element';
import { style } from './header.style.js';
import '../menu/index.js';

export class MusicStoreHeader extends LitElement {
  constructor() {
    super();
    this.isProd = !window.location.href.includes('cloud');
  }

  static get properties() {
    return {
      borderless: { type: Boolean, attribute: true },
    };
  }

  static get styles() {
    return [style];
  }

  render() {
    return html`
      <div class="header">
        <span class="app-type">MULTI SPA With Transition</span>
        <ms-common-menu></ms-common-menu>
      </div>
      <ul>
        <li href="http://localhost:3000/home">
          <img src="http://localhost:3000/assets/ng-conf.png" width="50">
          <p class="music">Music</p><p class="store">Store</p>
        </li>
        <li>
          <a href="http://localhost:3000/home">HOME</a>
        </li>
        <li>
          <a href="http://localhost:3000/albums">ALBUMS</a>
        </li>
        <li>
          <a href="http://localhost:3000/events">EVENTS</a>
        </li>
        <li style="${window.location.pathname === '/orders' ? 'display: block' : 'display: none'}">
          <a href="http://localhost:3000/orders">ORDERS</a>
        </li>
      </ul>
    `;
  }

  firstUpdated(changedProperties) {
    (function () {
      var current = location.pathname.split('/')[1];
      if (current === "") return;
      var menuItems = document.querySelectorAll('li a');
      for (var i = 0, len = menuItems.length; i < len; i++) {
        if (menuItems[i].getAttribute("href").indexOf(current) !== -1) {
          menuItems[i].className += "is-active";
        }
      }
    })();
  }

  clearSession() {
    if (sessionStorage.getItem('auto-ms-session')) {
      sessionStorage.removeItem('auto-ms-session');
    }
    if (sessionStorage.getItem('iv-session-id')) {
      sessionStorage.removeItem('iv-session-id');
    }
  }
}
