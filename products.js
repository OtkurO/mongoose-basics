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
  categories: {
    type: [String],
  },
  onSale: {
    type: Boolean,
    dafault: false,
  },
});

productSchema.methods.greet = function () {
  console.log('Hey!!--from: ', this.name);
};

productSchema.methods.toggleOnSale = function () {
  this.onSale = !this.onSale;
  return this.save();
};

productSchema.methods.addCategory = function (newCategory) {
  this.categories.push(newCategory);
  return this.save();
};

productSchema.statics.fireSale = function () {
  return this.updateMany({ online: 0 }, { price: 10 });
};

productSchema
  .virtual('productTitle')
  .get(function () {
    return this.name + ' ' + this.categories[0];
  })
  .set(function (pTitle) {
    this.name = pTitle.substr(0, pTitle.indexOf(' '));
    this.categories.push(pTitle.substr(pTitle.indexOf(' ') + 1));
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

// Product.insertMany([
//   {
//     name: 'Boys Bike Blue',
//     price: 119,
//   },
//   {
//     name: 'Girls Bike Pink',
//     price: 118,
//   },
// ])
//   .then((data) => {
//     console.log('Successful operation: insertMany. data: ', data);
//   })
//   .catch((err) => {
//     console.log('Failed operation: insertMany. err: ', err);
//   });

// Product.findOneAndUpdate(
//   { name: 'Mountain Bike Yose' },
//   { name: 'Mountain Bike Royal' },
//   { new: true, runValidators: true }
// )
//   .then((data) => console.log('Operation worked!. ', data))
//   .catch((err) => console.log('Error occured! ', err));

// const findProduct = async () => {
//   const foundProduct = await Product.findOne({
//     name: 'Mountain Bike Royal',
//     price: 156,
//   });
//   foundProduct.greet();
//   await foundProduct.toggleOnSale();
//   await foundProduct.addCategory('Bikes');
//   console.log(foundProduct);
// };

// findProduct();

//Statics defined on schema
// Product.fireSale().then((res) => console.log(res));
