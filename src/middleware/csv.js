const fs = require("fs");
const stringify = require("csv-stringify").stringify;

const saveCSV = (req, res, next) => {
  const { receiver, text } = req.body;

  if (!receiver || !text) {
    return;
  }

  const data = [receiver, text];

  stringify(
    data,
    {
      header: true,
    },
    (err, str) => {
      const path = "./files/" + Date.now() + ".csv";

      //create the files directory if it doesn't exist
      if (!fs.existsSync("./files")) {
        fs.mkdirSync("./files");
      }

      fs.writeFile(path, str, (err) => {
        if (err) {
          console.error(err);
          return res
            .status(400)
            .json({ success: false, message: "An error occured" });
        }
        res.download(path, "file.csv");
      });
    }
  );

  next();
};

module.exports = saveCSV;
