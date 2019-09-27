# Test-Thy-API
An experiment with API testing options including: schema validation, generative testing, property-based checks, fuzzing and BDD (cucumber-js)

## Notes
- A basic API build with express
- Some tests fail on purpose to show output (Relevant parts of code are commented)
- Edges cases and mistakes are purposeful
- Check out all the test styles under `./tests`

## Get started
```
nvm use
npm install
npm run test:integration
npm run test:e2e
# see package.json for more commands to run
```
## Tools

`mocha` - test runner
`supertest` - request/assertion library
`dredd` - schema validation against swagger/openapi
`cucumber-js` - BDD style testing framework
`fast-check` - Generative/Property based assertions
`swagger-jsdoc` - JSDoc -> Swagger output
