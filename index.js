var lib = process.env.COVERAGE ? './lib-cov' : './lib';

module.exports = require(lib + '/ip.js');
