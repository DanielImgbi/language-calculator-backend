const express = require("express");
const saveCSV = require("../middleware/csv");
const sendMail = require("../libs/mail");
const router = express.Router();

router.post("/summary", (req, res) => {
  const { receiver, text } = req.body;

  if (!receiver || !text) {
    res.status(401).json({ message: "fields cannot be empty" });
  }

  try {
    console.log(receiver, text);
    const response = sendMail(receiver, text);
    res.status(200).json({
      message: "Congratulations! you will receive an email of your scores.",
    });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

router.use(saveCSV);

module.exports = router;
