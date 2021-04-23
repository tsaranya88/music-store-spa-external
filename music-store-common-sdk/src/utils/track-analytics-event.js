export const trackAnalyticsEvent = (name, value = '', action = '', elementType = '') => {
  const ev = new CustomEvent('ms-track-event', {
    bubbles: true,
    composed: true,
    detail: {
      name,
      value,
      action,
      elementType,
    },
  });
  document.dispatchEvent(ev);
};
