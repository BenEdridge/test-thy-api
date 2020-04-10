const app = require('../../app');
const request = require('supertest');
const crypto = require('crypto');

function bruteForceTest() {
  const password = crypto.randomBytes(1).toString('hex');

  it(`should return 401 for case where password = ${password}`, function (done) {

    // this.retries(200);

    request(app)
      .post('/login')
      .send({ password })
      .expect(401)
      .end(done);
  });
};

describe('HTTP Endpoints', function () {

  describe('/login', function () {

    for (i = 0; i < 20; i++) {
      const password = crypto.randomBytes(1).toString('hex');
      it(`should return 401 for case where password = ${password}`, function (done) {

        // Bail after first test failure
        this._bail = true;

        request(app)
          .post('/login')
          .send({ password })
          .expect(401)
          .end(done);
      });
    }

    // for (i = 0; i < 10; i++) {
    //   bruteForceTest();
    // }

  });
});