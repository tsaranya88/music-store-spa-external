import { trackAnalyticsEvent } from './track-analytics-event.js';

describe('trackAnalyticsEvent', () => {
  it('should dispatch a ms-track-event event', () => {
    sinon.stub(document, 'dispatchEvent');
    trackAnalyticsEvent('hello');
    document.dispatchEvent.should.have.been.calledWith(
      new CustomEvent('ms-track-event', {
        bubbles: true,
        composed: true,
        detail: {
          name: 'hello',
          value: '',
          action: '',
          elementType: '',
        },
      }),
    );
    document.dispatchEvent.restore();
  });
});
