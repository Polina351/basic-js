const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix ) {
  const CATS_EARS_STRING = '^^';
  let countCatsEars = 0;
  for (const matrixStr of matrix) {
    for (const matrixStrElement of matrixStr) {
      if (matrixStrElement === CATS_EARS_STRING) {
        countCatsEars++;
      }
    }
  }
  return countCatsEars;
}

module.exports = {
  countCats
};
