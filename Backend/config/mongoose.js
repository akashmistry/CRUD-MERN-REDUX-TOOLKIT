const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://akashmistryofficial:03260220@cluster0.gbe5rca.mongodb.net/?retryWrites=true&w=majority"
);

const db = mongoose.connection;

// IF DATABASE CONNECTION HAS ERRORS
db.on("error", console.error.bind(console, "Error connecting to DataBase"));

// IF DATABASE IS RUNNING SUCCESSFULLY
db.once("open", () => {
  console.log("Successfully connected to the DataBase 🥞");
});

module.exports = db;
