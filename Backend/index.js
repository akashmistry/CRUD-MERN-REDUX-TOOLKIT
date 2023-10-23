const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 2620;
const app = express();
const db = require("./config/mongoose");

app.use(cors());

app.use(express.json());

app.use("/", require("./routes/index"));

app.listen(PORT, (err) => {
  if (err) {
    console.log("Error in starting the server");
  }
  console.log("Firing up the express server on: ", PORT);
});
