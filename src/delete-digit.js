const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  let maxRes = 0;
  let arr = Array.from(n.toString());
  for (let i = 0; i <= arr.length; i++) {
    arr = Array.from(n.toString());
    arr.splice(i, 1);
    let res = Number(arr.join(''));
    if (res > maxRes) {
      maxRes = res;
    }
  }
  return maxRes;
}

module.exports = {
  deleteDigit
};
