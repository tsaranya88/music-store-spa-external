import {
  LitElement,
  html,
  property,
  customElement,
} from "lit-element";

@customElement("ms-order-detail")
export class OrderDetail extends LitElement {
  @property({ type: String })
  orderId!: string;

  constructor() {
    super();
  }

  render() {
    return html`
    <ul>
        <li>Product 1</li>
        <li>Product 2</li>
        <li>Product 3</li>
        <li>Product 4</li>
    </ul>
    `;
  }

  firstUpdated() {
  }
}
