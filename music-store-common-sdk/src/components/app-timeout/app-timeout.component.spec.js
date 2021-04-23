import { fixture, html } from '@open-wc/testing';
import './index.js';

describe('MusicStoreAppTimeout', () => {
  let el;
  before(async () => {
    el = await fixture(html`<ms-common-app-timeout></ms-common-app-timeout>`);
  });
  describe('connectedCallback', () => {
    after(() => {
      el.setAppTimeout.restore();
      document.addEventListener.restore();
    });
    it('should call setAppTimeout and add event listeners', () => {
      sinon.stub(el, 'setAppTimeout');
      sinon.stub(document, 'addEventListener');
      el.connectedCallback();
      el.setAppTimeout.should.have.been.called;
      document.addEventListener.should.have.been.calledWith('keydown', el.resetTimer);
      document.addEventListener.should.have.been.calledWith('click', el.resetTimer);
    });
  });
  describe('disconnectedCallback', () => {
    after(() => {
      window.clearTimeout.restore();
      document.removeEventListener.restore();
    });
    it('should call setAppTimeout and add event listeners', () => {
      sinon.stub(window, 'clearTimeout');
      sinon.stub(document, 'removeEventListener');
      el.disconnectedCallback();
      window.clearTimeout.should.have.been.calledWith(el.appTimeout);
      document.removeEventListener.should.have.been.calledWith('keydown', el.resetTimer);
      document.removeEventListener.should.have.been.calledWith('click', el.resetTimer);
    });
  });
  describe('attributeChangedCallback', () => {
    it('should set clearSession with newValue', () => {
      el.attributeChangedCallback('clear-session', '', 'test');
      expect(el.clearSession).to.equal('test');
    });
    it('should set timeoutUrl with newValue', () => {
      el.attributeChangedCallback('timeout-url', '/', '/login');
      expect(el.timeoutUrl).to.equal('/login');
    });
    it('should set timer with newValue', () => {
      el.attributeChangedCallback('timer', '180000', '10000');
      expect(el.timer).to.equal('10000');
    });
    it('should do nothing when not observedAttribute', () => {
      el.attributeChangedCallback('', '', '');
      expect(el.timer).to.equal('10000');
    });
  });
  describe('resetTimer', () => {
    after(() => {
      window.clearTimeout.restore();
      el.setAppTimeout.restore();
    });
    it('should clearTimeout on window and setAppTimeout', () => {
      sinon.stub(window, 'clearTimeout');
      sinon.stub(el, 'setAppTimeout');
      el.resetTimer();
      window.clearTimeout.should.have.been.calledWith(el.appTimeout);
      el.setAppTimeout.should.have.been.called;
    });
  });
});
