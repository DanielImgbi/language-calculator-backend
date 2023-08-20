const express = require("express");
const words = require("../libs/words");
const router = express.Router();

router.get("/gridone", (req, res) => {
  res.status(200).json({ words: words.group1 });
});
router.get("/gridtwo", (req, res) => {
  res.status(200).json({ words: words.group2 });
});
router.get("/gridthree", (req, res) => {
  res.status(200).json({ words: words.group3 });
});
router.get("/gridfour", (req, res) => {
  res.status(200).json({ words: words.group4 });
});

module.exports = router;
