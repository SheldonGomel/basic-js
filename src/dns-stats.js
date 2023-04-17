const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats( domains ) {
  let domainsObj = {};
  for (let domain of domains) {
    let subdomains = domain.split('.').reverse();
    let curDomain = '';
     
    subdomains.forEach((subdomain)=>{
        curDomain = curDomain + '.' + subdomain;
        if (domainsObj.hasOwnProperty(curDomain)) domainsObj[curDomain] += 1;
        else domainsObj[curDomain] = 1;
    })
  }
  return domainsObj;
}

module.exports = {
  getDNSStats
};
