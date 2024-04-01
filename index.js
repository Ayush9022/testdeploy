const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/about", (req, res) => {
  res.send("we are pro developers");
});

app.listen(4500, () => {
  console.log("running");
});
