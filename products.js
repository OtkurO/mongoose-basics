const mongoose = require('mongoose');
mongoose
  .connect('mongodb://localhost:27017/shopApp')
  .then(() => {
    console.log('Mongoose CONNECTION OPEN!');
  })
  .catch((err) => console.log('CONNECTION ERROR!\n', err));

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
});

const Product = new mongoose.model('Product', productSchema);

// const bike = new Product({
//   name: 'Mountain Bike Yose',
//   price: 599,
// });

// bike
//   .save()
//   .then((data) => {
//     console.log('Data saved!\n', data);
//   })
//   .catch((err) => {
//     console.log('Error! --', err);
//   });

Product.findOneAndUpdate(
  { name: 'Mountain Bike Yose' },
  { price: 156 },
  { new: true, runValidators: true }
)
  .then((data) => console.log('Operation worked!. ', data))
  .catch((err) => console.log('Error occured! ', err));
