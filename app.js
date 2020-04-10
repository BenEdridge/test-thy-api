const express = require('express');
const app = express();
const swagger = require('./swagger');

const API_KEY = 'API_KEY: b1946ac92492d2347c6235b4d2611184';
const PASSWORD = 'fa';

const STOCK = {
  items: {
    apple: {
      price: 1,
      stock: 20,
    },
    pear: {
      price: 2,
      stock: 1
    },
    orange: {
      price: 1.0 + 2.0, // hmm dodgy
      stock: 10,
    }
  }
};

app.use(express.json());

app.get('/', (req, res) => res.send({
  status: 'API is ready!',
}));

/**
 * @swagger
 *
 * /login:
 *   post:
 *     description: Login to the application
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: username
 *         description: Username to use for login.
 *         in: formData
 *         required: true
 *         type: string
 *       - name: password
 *         description: User's password.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: login
 */
app.post('/login', (req, res) => {
  console.log('Login request: ', req.body);

  // BUG: password might no exist
  if(req.body.password === PASSWORD){
    res.send({
      API_KEY,
    });
  } else {
    res.sendStatus(401);
  }
});

app.use('/stock', (req, res, next) => {
  console.log('Stock request: ', req.body, req.headers);
  if (req.headers['x-api-key'] === '1234'){
    next();
  } else {
    res.sendStatus(401);
  }
})

app.get('/stock/fruit', (req, res) => {

  const oldStock = updatePrices(STOCK);

  res.send({
    ...STOCK,
    oldItems: {
      ...oldStock,
    }
  })
});

app.get('/swagger.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swagger);
});

function updatePrices(stock) {
  const newObj = JSON.parse(JSON.stringify(stock));
  
  Object.entries(stock.items)
    .forEach(([key, value]) => {
      newObj[key] = value;
      newObj[key].price *= 1.2; // Hmm
  });

  return newObj;
}

module.exports = app;