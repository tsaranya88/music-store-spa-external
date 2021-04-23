import { getFocusableElements } from './get-focusable-elements.js';

describe('getFocusableElements', () => {
  it('should call querySelectorAll on document when called with no parameters', () => {
    const querySpy = sinon.spy(document, 'querySelectorAll');
    getFocusableElements();
    querySpy.should.have.been.calledWith('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    querySpy.restore();
  });
  it('should call querySelectorAll on element when called with elem', () => {
    const testEl = document.createElement('p');
    const querySpy = sinon.spy(testEl, 'querySelectorAll');
    getFocusableElements(testEl);
    querySpy.should.have.been.calledWith('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    querySpy.restore();
  });
});
