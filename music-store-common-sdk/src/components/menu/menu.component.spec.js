import { fixture, html } from '@open-wc/testing';

import './index.js';

function createKeydownEvent(which, shiftKey = false) {
  return { preventDefault() {}, which, shiftKey };
}

describe('MusicStoreMenu', () => {
  let el;
  before(async () => {
    el = await fixture(html`<ms-common-menu logged-in></ms-common-menu>`);
    el = await fixture(html`<ms-common-menu></ms-common-menu>`);
  });
  describe('connectedCallback', () => {
    it('should addEventListener to document', () => {
      sinon.spy(document, 'addEventListener');
      el.connectedCallback();
      document.addEventListener.should.have.been.calledWith('keydown', el.handleEsc);
      document.addEventListener.restore();
    });
  });
  describe('disconnectedCallback', () => {
    it('should removeEventListener to document', () => {
      sinon.spy(document, 'removeEventListener');
      el.disconnectedCallback();
      document.removeEventListener.should.have.been.calledWith('keydown', el.handleEsc);
      document.removeEventListener.restore();
    });
  });
  describe('handleEsc', () => {
    let closeMenuSpy;
    before(() => {
      closeMenuSpy = sinon.spy(el, 'closeMenu');
    });
    after(() => {
      closeMenuSpy.restore();
    });
    it('should not call closeMenu if ev.which is not esc key', () => {
      const testEv = createKeydownEvent(10);
      el.handleEsc(testEv);
      closeMenuSpy.should.not.have.been.called;
    });
    it('should call closeMenu if ev.which is esc key', () => {
      const testEv = createKeydownEvent(27);
      el.handleEsc(testEv);
      closeMenuSpy.should.have.been.calledWith(testEv);
    });
  });
  describe('openMenu', () => {
    it('should set isMenuOpen to true', () => {
      const testEv = createKeydownEvent(27);
      el.openMenu(testEv);
      expect(el.isMenuOpen).to.equal(true);
    });
  });
  describe('closeMenu', () => {
    it('should set isMenuOpen to false', () => {
      const testEv = createKeydownEvent(27);
      el.closeMenu(testEv);
      expect(el.isMenuOpen).to.equal(false);
    });
  });
  describe('sendToBottom', () => {
    let focusSpy;
    before(() => {
      focusSpy = sinon.spy(el.lastElem, 'focus');
    });
    after(() => {
      focusSpy.restore();
    });
    it('should not call lastElem focus when shiftKey is false', () => {
      const testEv = createKeydownEvent(9, false);
      el.sendToBottom(testEv);
      focusSpy.should.not.have.been.called;
    });
    it('should call lastElem focus when shiftKey is true and tab is pressed', () => {
      const testEv = createKeydownEvent(9, true);
      el.sendToBottom(testEv);
      focusSpy.should.have.been.called;
    });
  });
  describe('sendToTop', () => {
    let focusSpy;
    before(() => {
      focusSpy = sinon.spy(el.firstElem, 'focus');
    });
    after(() => {
      focusSpy.restore();
    });
    it('should not call firstElem focus when shiftKey is true', () => {
      const testEv = createKeydownEvent(9, true);
      el.sendToTop(testEv);
      focusSpy.should.not.have.been.called;
    });
    it('should call firstElem focus when shiftKey is false and tab is pressed', () => {
      const testEv = createKeydownEvent(9, false);
      el.sendToTop(testEv);
      focusSpy.should.have.been.called;
    });
  });
});
