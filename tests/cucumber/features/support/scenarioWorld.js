const { setWorldConstructor } = require("cucumber");

// Isolated per scenario? // we can load in from other things
class CustomWorld {
  constructor() {
    this.token = '';
  }

  setToken(string) {
    this.token = string;
  }

  unSetToken() {
    this.token = '';
  }
}

setWorldConstructor(CustomWorld);

// defineParameterType(() => {

// })