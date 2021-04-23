import { querySelectorAllDeep } from 'query-selector-shadow-dom';

export function validateAllFields(form) {
  const inputs = querySelectorAllDeep('input, select, textarea', form);
  let focused = false;
  inputs.forEach(input => {
    const valid = input.checkValidity();
    if (!focused && !valid) {
      input.focus();
      focused = true;
    }
  });
  return !focused;
}
