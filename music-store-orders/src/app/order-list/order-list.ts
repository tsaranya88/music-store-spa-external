import {
  LitElement,
  html,
  property,
  customElement,
} from "lit-element";
import "@app/order-detail/order-detail";
import '@c1/gravity-wc/dist/accordion';
import 'music-store-common-sdk/components/header/index.js';
import 'music-store-common-sdk/components/footer/index.js';

@customElement("ms-order-list")
export class OrderList extends LitElement {
  @property({ type: String })
  userId!: string;

  constructor() {
    super();
  }

  render() {
    return html`
    <ms-common-header></ms-common-header>
    <div style="position: relative; top: 150px">
      <div>
        <span slot="summary">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#013D5B" height="24px" width="24px">
          <path d="M20 6.813a.749.749 0 00-.746-.826H16a4 4 0 00-8 0H4.751a.749.749 0 00-.746.826l1 9.621L4.02 21.1a.749.749 0 00.735.9h14.49a.749.749 0 00.734-.9L19 16.514zM8.5 10a.5.5 0 11.5-.5.5.5 0 01-.5.5zM9 5.987a3 3 0 016 0zM15.5 10a.5.5 0 11.5-.5.5.5 0 01-.5.5z"/>
        </svg>
        <div style="position: relative;top: -4px;display: inline-block;">
            Purchase Date 01/29 | Order 1
        </div>
        </span>
        <div class="content">
          <ms-order-detail></ms-order-detail>
        </div>
      </div>
       <div>
        <span slot="summary">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#013D5B" height="24px" width="24px">
          <path d="M20 6.813a.749.749 0 00-.746-.826H16a4 4 0 00-8 0H4.751a.749.749 0 00-.746.826l1 9.621L4.02 21.1a.749.749 0 00.735.9h14.49a.749.749 0 00.734-.9L19 16.514zM8.5 10a.5.5 0 11.5-.5.5.5 0 01-.5.5zM9 5.987a3 3 0 016 0zM15.5 10a.5.5 0 11.5-.5.5.5 0 01-.5.5z"/>
        </svg>
        <div style="position: relative;top: -4px;display: inline-block;">
            Purchase Date 02/19 | Order 2
        </div>
        </span>
        <div class="content">
          <ms-order-detail></ms-order-detail>
        </div>
      </div>
       <div>
        <span slot="summary">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#013D5B" height="24px" width="24px">
          <path d="M20 6.813a.749.749 0 00-.746-.826H16a4 4 0 00-8 0H4.751a.749.749 0 00-.746.826l1 9.621L4.02 21.1a.749.749 0 00.735.9h14.49a.749.749 0 00.734-.9L19 16.514zM8.5 10a.5.5 0 11.5-.5.5.5 0 01-.5.5zM9 5.987a3 3 0 016 0zM15.5 10a.5.5 0 11.5-.5.5.5 0 01-.5.5z"/>
        </svg>
        <div style="position: relative;top: -4px;display: inline-block;">
            Purchase Date 03/20 | Order 3
        </div>
        </span>
        <div class="content">
          <ms-order-detail></ms-order-detail>
        </div>
      </div>
       <div>
        <span slot="summary">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#013D5B" height="24px" width="24px">
          <path d="M20 6.813a.749.749 0 00-.746-.826H16a4 4 0 00-8 0H4.751a.749.749 0 00-.746.826l1 9.621L4.02 21.1a.749.749 0 00.735.9h14.49a.749.749 0 00.734-.9L19 16.514zM8.5 10a.5.5 0 11.5-.5.5.5 0 01-.5.5zM9 5.987a3 3 0 016 0zM15.5 10a.5.5 0 11.5-.5.5.5 0 01-.5.5z"/>
        </svg>
        <div style="position: relative;top: -4px;display: inline-block;">
            Purchase Date 03/29 | Order 4
        </div>
        </span>
        <div class="content">
          <ms-order-detail></ms-order-detail>
        </div>
      </div>
    </div>
    <ms-common-footer></ms-common-footer>
    `;
  }

  firstUpdated() {
  }
}
