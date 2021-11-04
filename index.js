const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Product = require('./models/product');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

mongoose
  .connect('mongodb://localhost:27017/shopApp')
  .then(() => {
    console.log('MONGO CONNECTION OPENED!');
  })
  .catch((err) => console.log('MONGO CONNECTION ERROR!\n', err));

app.get('/products', (req, res) => {
  Product.find({})
    .then((data) => {
      const products = data;
    })
    .catch((err) => console.log(err));
  res.send(data);
});

app.listen('3000', () => console.log('App is listening on port 3000!'));
