import { validDateOfBirth } from './valid-date-of-birth.js';

describe('validDateOfBirth', () => {
  const today = new Date();
  it('should return null when dob is allowed', () => {
    const dateToTest = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear() - 18}`;
    expect(validDateOfBirth(dateToTest)).to.equal(null);
  });
  it('should return invalidDayOfMonth when date is wrong', () => {
    const datesToTest = ['02/29/1985', '02/30/1986', '13/12/1986', '12/32/1986'];
    datesToTest.forEach(date => {
      expect(validDateOfBirth(date)).to.deep.equal({ invalidDayOfMonth: 'not a valid day of the year' });
    });
  });
  it('should return invalidYear when older than min year or ahead of this year', () => {
    const dateToTest = ['10/01/1903', `10/01/${today.getFullYear() + 10}`];
    dateToTest.forEach(date => {
      expect(validDateOfBirth(date)).to.deep.equal({ invalidYear: 'not a valid year' });
    });
  });
  it('should return invalidAge when age < 18', () => {
    today.setDate(today.getDate() + 1);
    const dateToTest = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear() - 18}`;
    expect(validDateOfBirth(dateToTest)).to.deep.equal({ invalidAge: 'must be 18 years or older' });
  });
});
