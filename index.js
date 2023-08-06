require("dotenv").config();
const express = require("express");
const { scan, getReport } = require("./controller");

const app = express();
app.use(express.json());

app.get("/scan", scan);
app.get("/report/:id", getReport);

const main = () => {
  try {
    app.listen(process.env._PORT || 8080, () => {
      console.log("Server works");
    });
  } catch (error) {
    console.log(error);
  }
};

main();
