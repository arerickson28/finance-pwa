const express = require("express");
const path = require("path");
// const logger = require("morgan");
const mongoose = require("mongoose");
// const compression = require("compression");

const PORT = process.env.PORT || 3000;

const app = express();

// app.use(logger("dev"));

// app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/financeDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// routes
app.use(require("./routes"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});