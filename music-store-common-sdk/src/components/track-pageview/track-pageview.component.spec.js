import { fixture, html } from '@open-wc/testing';
import './index.js';

describe('MusicStoreTrackPageview', () => {
  let el;
  before(async () => {
    el = await fixture(html`<ms-track-pageview pagename="hello" start="ms app" completed="ms app"></ms-track-pageview>`);
  });
  describe('connectedCallback', () => {
    it('should call appendProps and dispatch pageview event', () => {
      sinon.spy(el, 'appendProps');
      sinon.spy(el, 'dispatchEvent');
      el.connectedCallback();
      el.appendProps.should.have.been.calledWith('start', 'completed');
      el.dispatchEvent.should.have.been.calledWith(
        new CustomEvent('ms-track-pageview', {
          bubbles: true,
          composed: true,
          detail: {
            pagename: 'hello',
            start: 'ms app',
            completed: 'ms app',
          },
        }),
      );
    });
  });
  describe('appendProps', () => {
    it('should add prop/val to pageDetails if attribute exists', () => {
      el.setAttribute('start', 'test');
      el.appendProps('start');
      expect(el.pageDetails.start).to.equal('test');
    });
    it('should not add prop/val to pageDetails if attr does not exist', () => {
      el.appendProps('test');
      expect(el.pageDetails.test).not.to.exist;
    });
  });
});
