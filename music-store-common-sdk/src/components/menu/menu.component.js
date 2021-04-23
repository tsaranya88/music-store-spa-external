import { html, LitElement } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import { style } from './menu.style.js';
import { getFocusableElements } from '../../utils/get-focusable-elements.js';

export class MusicStoreMenu extends LitElement {
  constructor() {
    super();
    this.isMenuOpen = false;
    this.handleEsc = ev => {
      if (ev.which === 27) {
        this.closeMenu(ev);
      }
    };
  }

  static get properties() {
    return {
      isMenuOpen: { type: Boolean },
      loggedIn: { type: Boolean, attribute: 'logged-in' },
    };
  }

  static get styles() {
    return [style];
  }

  render() {
    return html`
      <a id="showMenuBtn" href="#" @click="${this.openMenu}" aria-label="menu">
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48" enable-background="new 0 0 48 48" xmlSpace="preserve">
          <g>
            <path d="M12.995,31h22.009c0.552,0,1,0.448,1,1s-0.448,1-1,1H12.995c-0.552,0-1-0.448-1-1S12.443,31,12.995,31z" fill="#aeb5bb" />
            <path d="M12.995,23h22.009c0.552,0,1,0.448,1,1s-0.448,1-1,1H12.995c-0.552,0-1-0.448-1-1S12.443,23,12.995,23z" fill="#aeb5bb" />
            <path d="M12.995,15h22.009c0.552,0,1,0.448,1,1s-0.448,1-1,1H12.995c-0.552,0-1-0.448-1-1S12.443,15,12.995,15z" fill="#aeb5bb" />
          </g>
        </svg>
      </a>
      <section class="menu-container" role="dialog" aria-hidden="${this.isMenuOpen ? 'false' : 'true'}">
        <div class="menu-overlay ${classMap({ hidden: !this.isMenuOpen })}" tabindex="-1" @click="${this.closeMenu}"></div>
        <ul class="${classMap({ active: this.isMenuOpen })}" @transitionend="${() => this.firstElem.focus()}">
          <li>
            <button type="button" aria-label="close menu" @click="${this.closeMenu}" @keydown="${this.sendToBottom}"></button>
          </li>
          <li class="menu-item">
            <a href="http://localhost:3000/home" target="_self" data-track="menuHomeBtn">Home</a>
          </li>
          <li class="menu-item">
            <a href="http://localhost:3000/orders" target="_self" data-track="menuOrdersBtn">My Orders</a>
          </li>
          <li class="menu-item">
            <a href="http://localhost:3000/help" id="menuFAQ">Get Help</a>
          </li>
          <li class="menu-item">
            <a href="http://localhost:3000/login/" id="signInMenu" @keydown="${this.sendToTop}">${this.loggedIn ? 'Sign Out' : 'Sign In'}</a>
            <svg version="1.1" width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 49 49" enable-background="new 0 0 49 49" xmlSpace="preserve">
              <g>
                <path
                  class="st0"
                  d="M24.5,49c-6.59,0-12.775-2.582-17.416-7.271C2.516,37.11,0,30.991,0,24.5C0,10.991,10.991,0,24.5,0
              S49,10.991,49,24.5c0,6.479-2.508,12.588-7.061,17.204C37.297,46.409,31.104,49,24.5,49z M7.027,40.212
              c0.249,0.276,0.504,0.546,0.767,0.812C12.246,45.522,18.178,48,24.5,48c6.333,0,12.274-2.485,16.727-6.999
              c0.255-0.259,0.504-0.522,0.746-0.791c-2.227-1.164-6.644-2.759-9.646-3.844l-0.674-0.244c-0.766-0.277-1.544-0.559-2.326-0.849
              L29,35.153v-4.323l0.238-0.146c0.939-0.579,2.544-2.06,2.742-5.474l0.015-0.268l0.231-0.135c0.634-0.371,1.013-1.233,1.013-2.308
              c0-0.975-0.309-1.774-0.847-2.195l-0.274-0.214l0.106-0.332c0.462-1.444,1.322-4.132,0.761-6.38C32.362,10.885,28.833,10,26,10
              c-2.417,0-5.621,0.695-6.7,2.653l-0.151,0.273l-0.312-0.015c-1.21-0.064-1.834,0.437-2.158,0.864
              c-1.135,1.497-0.285,4.527,0.124,5.983l0.092,0.328l-0.271,0.206c-0.549,0.417-0.864,1.221-0.864,2.208
              c0,1.074,0.378,1.937,1.013,2.308l0.231,0.135l0.015,0.268c0.198,3.414,1.803,4.895,2.742,5.474L20,30.831v4.323l-0.326,0.122
              c-0.772,0.288-1.563,0.574-2.356,0.861l-0.91,0.329C13.509,37.512,9.245,39.05,7.027,40.212z M24.5,1C11.542,1,1,11.542,1,24.5
              c0,5.508,1.889,10.737,5.357,14.936c2.219-1.208,6.522-2.76,9.712-3.912l0.908-0.328c0.679-0.246,1.357-0.491,2.022-0.737V31.38
              c-1.092-0.754-2.693-2.43-2.961-5.862c-0.805-0.601-1.278-1.705-1.278-3.019c0-1.151,0.359-2.141,0.995-2.775
              c-0.496-1.787-1.228-4.766,0.127-6.554c0.361-0.476,1.178-1.243,2.7-1.264C19.979,9.77,23.291,9,26,9
              c3.193,0,7.192,1.083,7.955,4.136c0.591,2.364-0.176,5.028-0.68,6.62c0.617,0.635,0.964,1.613,0.964,2.744
              c0,1.313-0.473,2.418-1.278,3.019c-0.268,3.432-1.869,5.108-2.961,5.862v3.077c0.67,0.247,1.336,0.488,1.993,0.726l0.673,0.244
              c3.302,1.192,7.756,2.802,9.977,4.008C46.111,35.235,48,30.006,48,24.5C48,11.542,37.458,1,24.5,1z"
                  fill="#FFFFFF"
                />
              </g>
            </svg>
          </li>
        </ul>
      </section>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('keydown', this.handleEsc);
  }

  disconnectedCallback() {
    document.removeEventListener('keydown', this.handleEsc);
    super.disconnectedCallback();
  }

  firstUpdated() {
    const [first, ...rest] = getFocusableElements(this.shadowRoot.querySelector('.menu-container'));
    this.firstElem = first;
    this.lastElem = rest.pop();
  }

  openMenu(ev) {
    ev.preventDefault();
    this.isMenuOpen = true;
  }

  closeMenu(ev) {
    ev.preventDefault();
    this.isMenuOpen = false;
    this.shadowRoot.querySelector('#showMenuBtn').focus();
  }

  sendToBottom(ev) {
    if (ev.which === 9 && ev.shiftKey) {
      ev.preventDefault();
      this.lastElem.focus();
    }
  }

  sendToTop(ev) {
    if (ev.which === 9 && !ev.shiftKey) {
      ev.preventDefault();
      this.firstElem.focus();
    }
  }
}
