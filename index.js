const express = require('express');
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const mongoose = require('mongoose');
mongoose
  .connect('mongodb://localhost:27017/shopApp')
  .then(() => {
    console.log('MONGO CONNECTION OPEN!');
  })
  .catch((err) => console.log('MONGO CONNECTION ERROR!\n', err));

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 25,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  quantity: {
    online: { type: Number, default: 0 },
    offline: { type: Number, default: 1 },
  },
  categories: {
    type: [String],
  },
  onSale: {
    type: Boolean,
    dafault: false,
  },
});

app.get('/dog', (req, res) => {
  console.log(res);
  res.send(req.url);
});

app.listen('3000', () => console.log('App is listening on port 3000!'));
