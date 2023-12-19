const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount( s1, s2 ) {
  let strShort = s1;
  let strLong = s2;
  let countChar = 0;

  if (s1.length >= s2.length) {
    strLong = s1;
    strShort = s2;
  }
  for (let index = 0; index < strShort.length; index++) {
    let symbol = strLong.indexOf(strShort[index]);
    if (symbol >= 0) {
      strLong = strLong.replace(strShort[index], '');
      countChar++;
    }
  }
  return countChar;
}

module.exports = {
  getCommonCharacterCount
};
