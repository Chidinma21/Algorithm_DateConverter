// A date is given as an integer of 6 digits. For example, the number 181019 represents October 18, 2019.
// Develop an algorithm that has such a number as input, checks that this number corresponds to a valid date and displays the following result:
// Day: 18
// Month: October
// Year: 2019

let dateFunction = (dateDigits) => {
  const invalid = "Invalid date format";
  dateLength = 6;
  // changing the digits into a string. If the date has a leading 0, "0" has to be added to the beginning of the string as numbers dont make sense with leading 0
  let stringDate = dateDigits.toString();
  if (stringDate.length == 5) {
    stringDate = "0" + stringDate;
  }
  let digitsArray = stringDate.split("");
  // pairing the array entries in twos and converting them to numbers. for example : [18, 10, 19]
  let dateArray = [
    parseInt(digitsArray[0] + digitsArray[1]),
    parseInt(digitsArray[2] + digitsArray[3]),
    parseInt(digitsArray[4] + digitsArray[5]),
  ];
  // specifying the maximum number of days there can generally be in a month and telling the day function what to return
  let day = () => {
    if (dateArray[0] <= 31) {
      return `Day: ${dateArray[0]}`;
    } else {
      return invalid;
    }
  };
  // specifying what the month function should return as well as maximum number of days for individual months
  let month = () => {
    if (dateArray[1] == 1) {
      return `Month: January`;
    } else if (dateArray[1] == 2 && dateArray[0] <= 29) {
      if (dateArray[2] % 4 == 0 && dateArray[0] <= 29) {
        return `Month: February`;
      } else if (dateArray[2] % 4 != 0 && dateArray[0] <= 28) {
        return `Month: February`;
      } else {
        return invalid;
      }
    } else if (dateArray[1] == 3) {
      return `Month: March`;
    } else if (dateArray[1] == 4 && dateArray[0] <= 30) {
      return `Month: April`;
    } else if (dateArray[1] == 5) {
      return `Month: May`;
    } else if (dateArray[1] == 6 && dateArray[0] <= 30) {
      return `Month: June`;
    } else if (dateArray[1] == 7) {
      return `Month: July`;
    } else if (dateArray[1] == 8) {
      return `Month: August`;
    } else if (dateArray[1] == 9 && dateArray[0] <= 30) {
      return `Month: September`;
    } else if (dateArray[1] == 10) {
      return `Month: October`;
    } else if (dateArray[1] == 11 && dateArray[0] <= 30) {
      return `Month: November`;
    } else if (dateArray[1] == 12) {
      return `Month: December`;
    } else {
      return invalid;
    }
  };
  // Here I assumed 0-59 to be 2000 - 2059, and then 60-99 to be 1960 - 1999
  let year = () => {
    if (dateArray[2] >= 100) {
      return invalid;
    } else if (dateArray[2] <= 59) {
      return `Year: ${parseInt(dateArray[2]) + 2000}`;
    } else {
      return `Year: ${parseInt(dateArray[2]) + 1900}`;
    }
  };
  if (day() == invalid || month() == invalid || year() == invalid) {
    return invalid;
  } else {
    return `
    ${day()} 
    ${month()} 
    ${year()}`;
  }
};
console.log(dateFunction(230198));

