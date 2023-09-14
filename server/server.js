const express = require("express");
const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
const morgan = require("morgan");
const helmet = require("helmet");
const dotenv = require("dotenv");
const app = express();
app.use(express.json());
dotenv.config();
const client = new MongoClient(process.env.MONGO_URL);
app.use(helmet());
app.use(morgan("common"));

const userRoute = require("./routes/user");
app.use("/api/users", userRoute);

async function getData() {
  let result = await client.connect();
  db = result.db(process.env.DATABASE_NAME);
  collection = db.collection("students");
  let data = await collection.find({}).toArray();
  console.log(data);
}

async function addData() {
  let result = await client.connect();
  db = result.db(process.env.DATABASE_NAME);
  collection = db.collection("students");
  // let data = await collection.insertOne({
  //   name: "Teshome2",
  //   age: 32,
  //   gender: "male",
  // });
  let findname = await collection.find().sort({ name: 1 }).toArray();
  // console.log(findname);
  // let updateone = await collection.updateOne(
  //   { name: "bbbbbbb" },
  //   { $set: { name: "Inserted" } }
  // );
  // console.log(findname);
  let deleteone = await collection.deleteOne({ name: "teshome" });
  // console.log(findname);
}

getData();
addData();

app.listen(8800, () => {
  console.log(`Server is running on port 8800.`);
});
