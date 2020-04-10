const assert = require('assert');
const fc = require('fast-check');
const app = require('../../app');
const request = require('supertest');

describe('Generative Testing', function () {

  fc.assert(
    fc.property(fc.string(2, 2), (password) => {
      it('should not return error', function (done) {
        request(app)
          .post('/login')
          .send({ password })
          .expect(401, done);
      }), { verbose: 2 }
    })
  );

  // it('async style', async () => {
  //   await fc.assert(
  //     fc.asyncProperty(fc.string(2, 2), async password => {
  //       return request(app)
  //         .post('/login')
  //         .send({ password })
  //         .expect(401);
  //     })
  //   );
  // });

});