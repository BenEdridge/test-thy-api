const { BeforeAll, AfterAll } = require('cucumber');
const cache = require('./cache');

// Runs before all features
BeforeAll(function (cb) {
  cache.set('test', 1234);
  console.log('BeforeAll');
  console.log('WipingDB');

  this.TOKEN = 'ABC';

  cb();
});;

// Runs after all features
AfterAll(function (cb) {
  console.log('AfterAll');
  console.log('TOKEN', this.TOKEN);
  console.log(cache.get('test'));
  cb();
});