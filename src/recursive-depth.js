const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth( arr ) {
    if (!Array.isArray(arr)) {
      return 0;
    }
    let res = 0;

    for (let elem of arr) {
      if (Array.isArray(arr)) {
        res = Math.max(res, this.calculateDepth(elem));
      }
    }
    return ++res;
  }
}

module.exports = {
  DepthCalculator
};
