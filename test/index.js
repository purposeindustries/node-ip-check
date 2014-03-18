var check = require('../');

describe('IP checker', function() {
  it('should return a function', function() {
    check('192.168.1.1/16').should.be.an.instanceof(Function);
  });
  it('should accept valid IPv4 addresses', function() {
    (function() {
      check('192.168.1.1/16');
    }).should.not.throw();
    (function() {
      check('foobar');
    }).should.throw();
    (function() {
      check('1.1.1/10');
    }).should.throw();
    (function() {
      check('314.923.123.345/16');
    }).should.throw();
    (function() {
      check('192.168.1.1/99');
    }).should.throw();
  });
  it('should validate IP addresses', function() {
    var c = check('192.168.1.1/16');
    c('192.168.10.103').should.be.true;
    c('192.169.0.1').should.be.false;
  });
})
