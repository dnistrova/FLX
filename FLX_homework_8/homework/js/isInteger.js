function isInteger(value) {
  var x = parseFloat(value);
  return !isNaN(value) && (x | 0) === x;
}

isInteger(5);
isInteger(5.1);