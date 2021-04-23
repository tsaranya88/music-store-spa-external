const str1 = '^(.*)([Pp]([Oo][Ss][Tt])?\\s*\\.?\\s*)([Oo]([fF][Ff][Ii][Cc][Ee])?\\s*.?\\s*)([Bb]([Oo])?[Xx])(.*)$';
const str2 = '^(.*)([Pp])([Bb])([Xx])(.*)$';
const str3 = '^(.*)([Pp][Oo][Ss][Tt]\\s*)([Oo][fF][Ff][Ii][Cc][Ee])(.*)$';
const str4 = '^(.*)([Pp][Oo][Ss][Tt]\\s*)([Bb][Oo][Xx])(.*)$';
const str5 = '^([Pp])([Oo])([Bb])(.*)$';

function isPOBox(addressValue) {
  const tempVal = addressValue.replace(/[^a-zA-Z0-9]+/g, '');
  return tempVal.match(new RegExp(str1)) || tempVal.match(new RegExp(str2)) || tempVal.match(new RegExp(str3)) || tempVal.match(new RegExp(str4)) || tempVal.match(new RegExp(str5));
}

function hasTwoWords(addressValue) {
  return /(\S+)(\s+\S+.*)/i.test(addressValue);
}

export function validAddress(address = '') {
  if (address) {
    if (isPOBox(address)) {
      return { isPoBox: 'value matched PO Box regex' };
    }
    if (!hasTwoWords(address)) {
      return { needsTwoWords: 'value needs more than one word' };
    }
  }
  return null;
}
