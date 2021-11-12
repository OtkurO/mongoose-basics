const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Product = require('./models/product');
const ejs = require('ejs');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

mongoose
  .connect('mongodb://localhost:27017/shopApp')
  .then(() => {
    console.log('MONGO CONNECTION OPENED!');
  })
  .catch((err) => console.log('MONGO CONNECTION ERROR!\n', err));

app.get('/products', async (req, res) => {
  try {
    let products = await Product.find({});
    res.render('index', { products });
  } catch (err) {
    console.log('Error: ', err);
  }
});

app.get('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('productDetail', { product });
  } catch (err) {
    console.log('Error: ', err);
  }
});

app.listen('3000', () => console.log('App is listening on port 3000!'));
