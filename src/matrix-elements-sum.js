const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum( matrix ) {
  const strLen = matrix[0].length;
  const matrixLen = matrix.length;
  let resSum = 0;
  for (let i = 0; i < matrixLen; i++) {
    for (let j = 0; j < strLen; j++) {
      if (i === 0) {
        resSum += matrix[i][j];
      } else if (i > 0 && !(matrix[i-1][j] === 0)) {
        resSum += matrix[i][j];
      }
    }
  }
  return resSum;
}

module.exports = {
  getMatrixElementsSum
};
