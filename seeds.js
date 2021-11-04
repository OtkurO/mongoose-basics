const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose
  .connect('mongodb://localhost:27017/shopApp')
  .then(() => {
    console.log('MONGO CONNECTION OPENED!');
  })
  .catch((err) => console.log('MONGO CONNECTION ERROR!\n', err));

// const p = new Product({
//   name: 'Grapefruit',
//   price: 1.99,
//   category: 'fruit',
// });

// p.save()
//   .then((p) => console.log(p))
//   .catch((err) => console.log(err));

const seedProducts = [
  {
    name: 'Eggplant',
    price: 1.0,
    category: 'vegetable',
  },
  {
    name: 'Organic melon',
    price: 4.99,
    category: 'fruit',
  },
  {
    name: 'Watermelon',
    price: 4.5,
    category: 'fruit',
  },
  {
    name: 'Celery',
    price: 2.99,
    category: 'vegetable',
  },
  {
    name: 'Milk',
    price: 1.29,
    category: 'dairy',
  },
];

Product.insertMany(seedProducts)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
