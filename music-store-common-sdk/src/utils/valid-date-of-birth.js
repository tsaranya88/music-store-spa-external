function invalidDayOfMonth(month, day, year) {
  return month > 12 || day > 31 || day <= 0 || month <= 0 || (day > 30 && [4, 6, 9, 11].includes(month)) || (year % 4 === 0 && month === 2 && day > 29) || (year % 4 !== 0 && month === 2 && day > 28);
}

function invalidAge(dobMonth, dobDay, dobYear) {
  const today = new Date();
  const yearDifference = today.getFullYear() - dobYear;
  if (yearDifference === 18) {
    const currentMonth = today.getMonth() + 1;
    if (currentMonth === dobMonth) {
      return today.getDate() < dobDay;
    }
    return currentMonth < dobMonth;
  }
  return yearDifference < 18;
}

export function validDateOfBirth(dateInMMDDYYYY, minimumYear = 1904) {
  if (dateInMMDDYYYY) {
    const dateArray = dateInMMDDYYYY.split('/');
    const month = parseInt(dateArray[0], 10);
    const day = parseInt(dateArray[1], 10);
    const year = parseInt(dateArray[2], 10);

    if (invalidDayOfMonth(month, day, year)) {
      return { invalidDayOfMonth: 'not a valid day of the year' };
    }
    if (year <= minimumYear || year > new Date().getFullYear()) {
      return { invalidYear: 'not a valid year' };
    }
    if (invalidAge(month, day, year)) {
      return { invalidAge: 'must be 18 years or older' };
    }
    return null;
  }
  return null;
}
