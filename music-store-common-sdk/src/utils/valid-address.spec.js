import { validAddress } from './valid-address.js';

describe('validAddress', () => {
  it('should return null if value has two words', () => {
    expect(validAddress('123 Test')).to.equal(null);
  });
  it('should return null if no value', () => {
    expect(validAddress()).to.equal(null);
  });
  it('should return needsTwoWords if value has one word', () => {
    expect(validAddress('Test')).to.deep.equal({ needsTwoWords: 'value needs more than one word' });
  });
  it('should return isPoBox when matches regex', () => {
    const valuesToTest = ['Post Office Box 123', 'Post Box 123', 'Post Office 123', 'P.O. Box 123'];
    valuesToTest.forEach(address => {
      expect(validAddress(address)).to.deep.equal({ isPoBox: 'value matched PO Box regex' });
    });
  });
});
