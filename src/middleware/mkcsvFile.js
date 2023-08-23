const csv = require("fast-csv");
const fs = require("fs");

const createCsvFile = () => {
  const stream = csv.format({
    headers: true,
  });

  if (!fs.existsSync("public/files")) {
    fs.mkdirSync("public/files");
  }

  const write = fs.createWriteStream("public/files/file.csv");

  stream.pipe(write);

  stream.write({
    name: "Daniel",
    surname: "Imgbi",
    text: "hello world",
  });

  stream.end();
  write.end();
};

module.exports = createCsvFile;
