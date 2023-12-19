const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity === "string" && Number(sampleActivity) !== NaN && Number(sampleActivity) <= 15 && Number(sampleActivity) > 0) {
    let k = Math.round((Math.log(2) / HALF_LIFE_PERIOD) * 10000000000) / 10000000000;
    console.log(k);
    let t = Math.ceil(Math.log( MODERN_ACTIVITY / sampleActivity) / k);

    return t;
  }
  return false;
}

module.exports = {
  dateSample
};
