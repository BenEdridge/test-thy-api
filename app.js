const express = require('express');
const app = express();

const API_KEY = 'b1946ac92492d2347c6235b4d2611184'; // md5 :/
const PASSWORD = 'password1234';

const STOCK = {
  items: {
    apple: {
      price: 2,
      stock: 20,
    },
    pear: {
      price: 3,
      stock: 1
    },
    orange: {
      price: 2.00000000003, // hmm dodgy
      stock: 10,
    }
  }
};

app.use(express.json());

app.get('/', (req, res) => res.send({
  status: 'API is ready!',
}));

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