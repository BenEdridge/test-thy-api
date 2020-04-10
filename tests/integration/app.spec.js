const app = require('../../app');
const request = require('supertest');
let server = null;

// before('Starting Server', function (done) {
//   server = app.listen(3000, function () {
//     done();
//   });
// });

describe('HTTP Endpoints', function () {
  describe('/', function () {
    it('should return welcome to API', function (done) {
      request(app)
        .get('/')
        .expect(200, {
          status: 'API is ready!'
        })
        .end(done);
    });
  });
});

// after('Shutting Down Server', function (done) {
//   server.close();
//   done();
// });