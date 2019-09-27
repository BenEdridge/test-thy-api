const assert = require('assert');
const fc = require('fast-check');
const app = require('../../app');

const request = require('supertest');
let server = null;

before('Starting Server', function (done) {
  server = app.listen(3000, function () {
    setTimeout(() => {
      done();
    }, 500);
  });
});

///*bug*/ const contains = (pattern, text) => text.substr(1).indexOf(pattern) !== -1;
const contains = (pattern, text) => text.indexOf(pattern) === -1;

describe('Generative Testing', function () {
  // it('should not return error', function (done) {
  //   fc.assert(
  //     fc.property(fc.string(), fc.string(), fc.string(), (a, b, c) => {
  //       return contains('2', a + b + c);
  //     }),
  //     { verbose: 2 }
  //   );
  //   done();
  // });

    // fc.assert(
    //   fc.property(fc.string(3,5), (login) => {

    //     it('should not return error', function (done) {

    //       request(app)
    //         .post('/login')
    //         .send({ password: login})
    //         .expect(200, done);

    //     }),{ verbose: 2 }
    //   })
    // );


    it('async style', async () => {
      await fc.assert(
        fc.asyncProperty(fc.string(5,10), async login => {
          return request(app)
          .post('/login')
          .send({ password: login})
          .expect(401);
        })
      );
    });


});

after('Shutting Down Server', function (done) {
  server.close();
  done();
});