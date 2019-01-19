const mongoose = require("mongoose");

const librarySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "The library name is required"],
    minlength: 1
  },
  capacity: {
    type: Number
  },
  location: { type: { type: String }, coordinates: [Number] },
  description: {
    type: String
  }
});

const Library = mongoose.model("Library", librarySchema);

module.exports = Library;
