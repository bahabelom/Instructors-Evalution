const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(morgan("dev"));
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

const PORT = process.env.PORT || 3000;
const employeerRoute = require("./routes/employee");

mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
  },
  {
    useUnifiedToplogy: true,
  }
);

var conn = mongoose.connection;
conn.on("connected", function () {
  console.log("Database connected");
});
conn.on("disconnected", function () {
  console.log("MongoDB disconnected ");
});
conn.on("error", console.error.bind(console));

app.use("/api/employee", employeerRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
module.exports = conn;
