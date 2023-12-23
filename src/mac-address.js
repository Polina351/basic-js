const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address( n ) {
  const regexp = /\p{Hex_Digit}\p{Hex_Digit}/u;
  const array = n.split('-');
  let isHex = true;

  for (const arrayElement of array) {
    if (regexp.test(arrayElement) === false) {
      isHex = false;
    }
  }
  return Boolean(isHex && array.length === 6);
}
module.exports = {
  isMAC48Address
};
