const express = require("express");
const createCsvFile = require("../libs/mkcsvFile");
const mailer = require("../libs/mail");
const router = express.Router();

router.post("/summary", (req, res) => {
  const { receiver, text } = req.body;

  try {
    if (!receiver || !text) {
      throw Error("please fill the fields properly!");
    }

    console.log(receiver, text);
    mailer(receiver, text);

    res.status(200).json({
      message: "Congratulations! you will receive an email of your scores.",
    });

    const data = {
      subject: "Your Scores For English Test",
      message: `the following are the summary of your score for english word test. G1: ${text.G1}, G2: ${text.G2}, G3: ${text.G3}, G4: ${text.G4} `,
    };

    createCsvFile(data);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});

module.exports = router;
