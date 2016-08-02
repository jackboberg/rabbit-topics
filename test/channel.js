const Code = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;

const Channel = require('../lib/channel');

describe('channel', function () {
  it('needs tests', { skip: true }, function (done) {
    expect(Channel).to.be.a.function();
    done();
  });
});
