const { BeforeAll, AfterAll } = require('cucumber');
const cache = require('./cache');
const app = require('../../../../app');
let server = null;

// Runs before all features
BeforeAll(function (cb) {
  cache.set('test', 1234);
  console.log('BeforeAll');
  console.log('WipingDB');

  this.TOKEN = 'ABC';

  server = app.listen(3000, function () {
    setTimeout(() => {
      cb();
    }, 500);
  });
});;

// Runs after all features
AfterAll(function (cb) {
  console.log('AfterAll');
  console.log('TOKEN', this.TOKEN);
  console.log(cache.get('test'));

  console.log("Shutting down server")
  server.close();

  cb();
});