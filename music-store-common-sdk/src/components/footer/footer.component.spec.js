import { fixture, html } from '@open-wc/testing';

import './index.js';

describe('MusicStoreFooter', () => {
  let el;
  before(async () => {
    el = await fixture(html`<ms-common-footer></ms-common-footer>`);
  });

  it('should have an initial helpNumber of 1.888.263.4582', () => {
    expect(el.helpNumber).to.equal('1.888.111.1111');
  });
});
