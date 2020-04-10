const Dredd = require('dredd');
const app = require('../../app');
let server = null;

const dredd = new Dredd(
  {
    endpoint: 'http://localhost:3000', // your URL to API endpoint the tests will run against
    path: ['http://localhost:3000/swagger.json'], // Required Array if Strings; filepaths to API description documents, can use glob wildcards
    'dry-run': false, // Boolean, do not run any real HTTP transaction
    names: false,     // Boolean, Print Transaction names and finish, similar to dry-run
    loglevel: 'warning', // String, logging level (debug, warning, error, silent)
    only: [],         // Array of Strings, run only transaction that match these names
    header: [],       // Array of Strings, these strings are then added as headers (key:value) to every transaction
    user: null,       // String, Basic Auth credentials in the form username:password
    hookfiles: [],    // Array of Strings, filepaths to files containing hooks (can use glob wildcards)
    reporter: ['dot', 'html'], // Array of possible reporters, see folder lib/reporters
    output: [],       // Array of Strings, filepaths to files used for output of file-based reporters
    'inline-errors': false, // Boolean, If failures/errors are display immediately in Dredd run
    require: null,    // String, When using nodejs hooks, require the given module before executing hooks
    color: true,
    // emitter: new EventEmitter(), // listen to test progress, your own instance of EventEmitter
    apiDescriptions: ['FORMAT: 1A\n# Sample API\n']
  }
);

server = app.listen(3000, function () {
  setTimeout(() => {
    run();
  }, 500);
});

const run = function (){
  dredd.run(function (err, stats) {
    if(err){
      console.error(err);
    } else {
      console.log(stats);
    }
    server.close();
  });
}
