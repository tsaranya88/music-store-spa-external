export function getFocusableElements(elem = document) {
  return elem.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
}
