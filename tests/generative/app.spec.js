const assert = require('assert');
const fc = require('fast-check');

///*bug*/ const contains = (pattern, text) => text.substr(1).indexOf(pattern) !== -1;
const contains = (pattern, text) => text.indexOf(pattern) !== -1;

fc.assert(
  fc.property(fc.string(), fc.string(), fc.string(), (a, b, c) => {
    return contains('dfas', 'a' + b + c);
  }),
  { verbose: 2 }
);
