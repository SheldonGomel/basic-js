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
  const strN = n.toString();
  let max = 0;
  for (let i = 0; i < strN.length; i++) {
    let num = parseInt(strN.substring(0, i) + strN.substring(i + 1,strN.length));
    if (num > max) max = num;
  }
  return max;
}

module.exports = {
  deleteDigit
};
