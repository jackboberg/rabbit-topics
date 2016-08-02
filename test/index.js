const Code = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;

const Topics = require('..');

describe('rabbit-topics', function () {
  it('needs tests', { skip: true }, function (done) {
    expect(Topics).to.be.a.funcion();
    done();
  });
});
