module.exports = function getZerosCount(number) {
  c = 0
  while (number >= 5) {
    number = Math.floor(number / 5);
    c += number;
  }
  return c;
}
