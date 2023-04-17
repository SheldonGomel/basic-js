const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let indexAt = email.lastIndexOf('@');
  let domain = email.slice(indexAt + 1, email.length);
  return domain;
}

module.exports = {
  getEmailDomain
};
