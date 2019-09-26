'use strict';

function Cache() {

  const _cache = Object.create(null);

  function validateKeyAndValue(key, value){
    if(typeof key !== 'string'){
      throw Error('cache key can only be a string');
    }
    if(typeof value === 'function'){
      throw Error('cache value cannot be a function');
    }
  }

  this.set = function (key, value){
    validateKeyAndValue(key, value);
    console.log('Saving', key, value);
    _cache[key] = value;
  };

  this.del = function (key){
    validateKeyAndValue(key, '');
    delete _cache[key];
  }

  this.get = function (key) {
    validateKeyAndValue(key, '');
    console.log('Getting', key);
    return _cache[key];
  }
}

module.exports = new Cache();
module.exports.Cache = Cache;