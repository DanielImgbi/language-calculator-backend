const csv = require("fast-csv");
const fs = require("fs");

const createCsvFile = (data) => {
  console.log("csv here");
  const stream = csv.format({
    headers: true,
  });

  if (!fs.existsSync("public/files")) {
    fs.mkdirSync("public/files");
  }

  const write = fs.createWriteStream("public/files/file.csv");

  stream.pipe(write);

  stream.write(data);

  stream.end();
  write.end();
  console.log("Done!!!!!");
};

module.exports = createCsvFile;
