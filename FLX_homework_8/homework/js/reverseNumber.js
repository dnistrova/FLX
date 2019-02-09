function reverseNumber(number) {
  number = number + '';
  let n = number.split('').reverse().join('');
  return parseInt(n) * Math.sign(number);
}

reverseNumber(123);
reverseNumber(-456);
reverseNumber(10000);