const { Given, When, Then } = require('cucumber')
const { expect } = require('chai')

Given('the request URL is {string}', function (string, cb) {
    this.URL = string;
    // cb(null, 'resolved');
    // cb(null, 'pending');

    const request = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(200);
        }, 1000);
    });

    request.then((result) => {
        this.RESULT = result;
        cb(null, result);
    });
});

When(/^I send a GET request$/, function (cb) {
    console.log("Received", this.RESULT);
    cb(null, 'resolved');
});

Then(/^I get an OK response$/, function (cb) {
    expect(this.RESULT).equal(200);
    cb(null, 'resolved');
});

Then(/^the result is:$/, function (cb) {
    // cb(null, 'resolved');
    expect(this.message).equal("");
});
