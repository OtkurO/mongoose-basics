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
const theShawshankRedemption = new Movie({
  title: "The Shawshank Redemption",
  year: 1994,
  score: 9.3,
  rating: "R",
});
