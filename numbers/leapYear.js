function isLeap(year) {
  return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0 ? true : false;
}

return year % 400 == 0 || (year % 4 == 0 && year % 100 != 0);

isLeap(2020); // ➞ true
// Exactly divided by 4 and not by 100.

isLeap(1800); // ➞ false
// Exactly divided by 4, but is also exactly divided by 100.

isLeap(2000); // ➞ true
// Exactly divided by 400.

isLeap(2019); // ➞ false
// It can't be exactly divided by 400 or by 4.
