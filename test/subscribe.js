const Code = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;

const Subscribe = require('../lib/subscribe');

describe('Subscribe', function () {
  it('needs tests', { skip: true }, function (done) {
    expect(Subscribe).to.be.a.function();
    done();
  });
});
