const express = require("express");
const Library = require("../models/Library");

const router = express.Router();

router.use((req, res, next) => {
  console.log("DEBUG routes/countries");
  next();
});

// Route to get all countries
router.get("/", (req, res, next) => {
  Library.find()
    .then(libraries => {
      res.json(libraries);
    })
    .catch(err => next(err));
});

// Route to add a country
router.post("/", (req, res, next) => {
  let { name, capacity, location } = req.body;
  Library.create({ name, capacity, location })
    .then(library => {
      res.json({
        success: true,
        library
      });
    })
    .catch(err => next(err));
});

module.exports = router;
