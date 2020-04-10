const app = require('../../app');
const request = require('supertest');

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