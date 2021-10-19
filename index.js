const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:7727017/movieApp")
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
