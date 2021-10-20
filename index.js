const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/movieApp")
  .then(() => {
    console.log("Mongoose CONNECTION OPEN!");
  })
  .catch((err) => console.log("CONNECTION ERROR!\n", err));

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String,
});

//Create Movie class
const Movie = mongoose.model("Movie", movieSchema);
// const theShawshankRedemption = new Movie({
//   title: "The Shawshank Redemption",
//   year: 1994,
//   score: 9.3,
//   rating: "R",
// });

Movie.insertMany([
  { title: "The Shawshank Redemption", year: 1994, score: 9.3, rating: "R" },
  { title: "Alien", year: 1979, score: 8.1, rating: "R" },
  { title: "The Iron Giant", year: 1999, score: 7.5, rating: "PG" },
  { title: "Stand By Me", year: 1986, score: 8.6, rating: "R" },
  { title: "Moonrise Kingdom", year: 2012, score: 7.3, rating: "PG-13" },
]).then((data) => {
  console.log("Inserted many successfully!");
  console.log(data);
});
