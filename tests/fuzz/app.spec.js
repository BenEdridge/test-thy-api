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

// function testFn(){
//   describe('HTTP Endpoints', function () {

//     describe('/', function () {

//       it('should return 401 for all cases', function (done) {

//         this.retries(200);
//         console.error('Test');

//         request(app)
//           .post('/login')
//           .send({ password: Math.random().toString()})
//           .expect(401)
//           .end(done);
//       });
//     });
//   });
// };

// for(i = 0; i< 100; i++){
//   testFn();
// }

describe('HTTP Endpoints', function () {

  describe('/login', function () {

    // for 100 times
    for(i = 0; i < 100; i++){

      it('should return 401 for all cases', function (done) {
        request(app)
          .post('/login')
          .send({ password: Math.random()*1})
          .expect(401)
          .end(done);
      });

    }
  });
});

after('Shutting Down Server', function (done) {
  server.close();
  done();
});

