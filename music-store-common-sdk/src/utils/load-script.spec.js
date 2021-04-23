import { loadScript } from './load-script.js';

describe('loadScript', () => {
  it('should return a script tag with an id if an id exists', async () => {
    const testElem = await loadScript('http://localhost:1111', 'testId');
    expect(testElem.getAttribute('id')).to.equal('testId');
  });
  it('should return a script tag without an id if not called with id', async () => {
    const testElem = await loadScript('http://localhost:1111');
    expect(testElem.getAttribute('id')).to.not.exist;
  });
});
