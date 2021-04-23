import { OrderList } from '../app/order-list/order-list';

if (!window.customElements.get('ms-order-list')) {
  window.customElements.define('ms-order-list', OrderList);
}
