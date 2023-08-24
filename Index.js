const express = require("express");
const grid = require("./src/router/gridRout");
const summary = require("./src/router/summaryRoute");
const body_parser = require("body-parser");

const cors = require("cors");

const app = express();

app.use(body_parser.urlencoded({ extends: false }));
app.use(body_parser.json());
app.use(cors());

app.use((req, res, next) => {
  console.log(req.url);
  next();
});

app.use("/api", grid);
app.use("/api", summary);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(8080, () => {
  console.log("listening at port 8080!");
});
