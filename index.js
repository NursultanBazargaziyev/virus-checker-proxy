require("dotenv").config();
const express = require("express");
const { scan, getReport } = require("./controller");

const app = express();
app.use(express.json());

app.get("/scan", scan);
app.get("/report/:id", getReport);
const port = process.env.PORT || 8080;

const main = () => {
  try {
    app.listen(port, () => {
      console.log("Server works");
    });
  } catch (error) {
    console.log(error);
  }
};

main();
