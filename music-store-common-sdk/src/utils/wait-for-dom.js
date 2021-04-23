export function waitForDom() {
  return new Promise(res => {
    if (document.readyState === 'complete') {
      res();
    } else {
      window.addEventListener('load', function loadedCallback() {
        window.removeEventListener('load', loadedCallback);
        res();
      });
    }
  });
}
