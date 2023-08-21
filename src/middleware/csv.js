const fs = require("fs");
const stringify = require("csv-stringify").stringify;

const saveCSV = (req, res, next) => {
  const data = req.body.data;

  if (!data || !data.length) {
    return res
      .status(400)
      .json({ success: false, message: "Please enter at a 1 row" });
  }

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
