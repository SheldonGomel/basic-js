const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

const chainMaker = {
  chain: [],
  getLength() {
    return this.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      typeof position != 'number' ||
      position < 1 ||
      position > this.chain.length
    ) {
      this.chain = [];
      throw new Error(`You can't remove incorrect link!`);
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let end = this.chain.join('~~');
    this.chain = [];
    return end;
  },
};

module.exports = {
  chainMaker
};
