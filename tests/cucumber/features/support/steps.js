const { Given, When, Then, Before, After, setDefinitionFunctionWrapper } = require('cucumber');
const { expect } = require('chai');
const request = require('supertest');
const cache = require('./cache');

// setDefinitionFunctionWrapper(function (fn) {
//   if (isGenerator.fn(fn)) {
//     return Promise.coroutine(fn);
//   } else {
//     return fn;
//   }
// });

Before(function(scenario, cb) {
  console.log('Local before:', scenario.sourceLocation.uri);
  console.log('Deleting tokens, bearers and storage');
  console.log('TOKEN:', this.TOKEN);
  this.TOKEN = cache.get('test');
  cb();
});

Given('the request URL is {string}', function (url, cb) {
  this.TOKEN = cache.get('test');
  console.log('Req', this.TOKEN);
  this.TOKEN = 'fadsfasfsdf';
  this.REQ = request('http://localhost:3000')
  .get(url);
  cb();
});

When(/^I send a GET request$/, function (cb) {
  this.REQ
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json');
  cb();
});

Then(/^I get an OK response$/, function (cb) {
  this.REQ.expect(200).end((err, res) => {
    if(err){
      cb(err, 'rejected');
    } else {
      cb(null, 'resolved');
    }
  });
});

Then(/^the result is:$/, function (cb) {
  this.REQ.end((err, res) => {
    if(err){
      cb(err, 'rejected');
    } else {
      cb(res, 'resolved');
    }
  })
});

After(function(scenario, cb) {
  console.log('Local after:', scenario.sourceLocation.uri);
  console.log('TOKEN', this.TOKEN);
  console.log('Cache', cache.get('test'));
  cb();
});