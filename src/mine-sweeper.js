const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper( matrix ) {
  const allRows = matrix.length;
  const allCols = matrix[0].length;
  const res = [];

  for (let i = 0; i < allRows; i++) {
    res.push(new Array(allCols).fill(0));
  }

  function checkValidCell(row, col) {
    return row < allRows && row >= 0 && col < allCols && col >= 0;
  }

  for (let row = 0; row < allRows; row++) {
    for (let col = 0; col < allCols; col++) {
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (i === 0 && j === 0) continue;
          const newRow = row + i;
          const newCol = col + j;
          if (checkValidCell(newRow, newCol) && matrix[newRow][newCol]) {
            res[row][col]++;
          }
        }
      }
    }
  }

  return res;
}

module.exports = {
  minesweeper
};
