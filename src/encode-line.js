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
function encodeLine(str) {
  let encd = '';
  let cnt = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i + 1]) cnt++;
    else {
      if(cnt == 0) cnt = '';
      else cnt++;
      encd = encd + cnt + str[i];
      cnt = 0;
    }
  }
  return encd;
}

module.exports = {
  encodeLine
};
