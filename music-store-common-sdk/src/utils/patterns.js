export const NUMBERS_ONLY = {
  regex: /^[0-9]+$/,
  string: '^[0-9]+$',
};
export const ALT_KEYS = {
  regex: /(Backspace)|(Delete)|(Shift)|(Tab)|(Enter)|(ArrowRight)|(ArrowLeft)/,
  string: '(Backspace)|(Delete)|(Shift)|(Tab)|(Enter)|(ArrowRight)|(ArrowLeft)',
};
export const NO_SPECIAL_CHARACTERS = {
  regex: /(([ \-.']*)?[A-Za-z]+([ \-.']*)?)*/,
  string: "(([ \\-.']*)?[A-Za-z]+([ \\-.']*)?)*",
};
