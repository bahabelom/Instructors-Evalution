let result = await client.connect();
db = result.db(process.env.DATABASE_NAME);
collection = db.collection("students");
let data = await collection.find({}).toArray();
console.log(data);

// add data
async function addData() {
  // let result = await client.connect();
  // db = result.db(process.env.DATABASE_NAME);
  // collection = db.collection("students");
  // // let data = await collection.insertOne({
  // //   name: "Teshome2",
  // //   age: 32,
  // //   gender: "male",
  // // });
  // let findname = await collection.find().sort({ name: 1 }).toArray();
  // console.log(findname);
  // // let updateone = await collection.updateOne(
  // //   { name: "bbbbbbb" },
  // //   { $set: { name: "Inserted" } }
  // // );
  // console.log(findname);
  // let deleteone = await collection.deleteOne({ name: "teshome" });
  // console.log(findname);
}
