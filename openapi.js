const oa = require('openapi-to-postmanv2');
const schemaFile = fs.readFileSync('swagger.json', {encoding: 'UTF8'});

const run = function (){
  oa.convert({ type: 'string', data: schemaFile },
  {}, (err, conversionResult) => {
    if (!conversionResult.result) {
      console.log('Could not convert', conversionResult.reason);
    }
    else {
      console.log('The collection object is: ', conversionResult.output[0].data);
    }
  })
};

