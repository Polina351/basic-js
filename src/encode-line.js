const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine( str ) {
  let res = '';

  let countSymb = 1;
  for (let i = 0; i < str.length; i++) {

    if (str[i] === str[i + 1]) {
      countSymb += 1;
    } else {
      countSymb > 1 ? res += countSymb + str[i] : res += str[i];
      countSymb = 1;
    }
  }
  return res;
}

module.exports = {
  encodeLine
};
