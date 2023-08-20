const express = require("express");
const saveCSV = require("../middleware/csv");
const sendMail = require("../libs/mail");
const router = express.Router();

router.post("/summary", (req, res) => {
  const { data } = req.body;
  sendMail(data.receiver, data.subject, data.text);
});

router.use(saveCSV);

module.exports = router;
