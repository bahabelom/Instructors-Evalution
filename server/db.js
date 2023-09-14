const mongoose = require("mongoose");

const connection = mongoose
  .createConnection(`mongodb://127.0.0.1:27017/school`)
  .on("open", () => {
    console.log("MongoDB Connected");
  })
  .on("error", () => {
    console.log("MongoDB Connection error");
  });

module.exports = connection;

// var mongoose = require('mongoose')
// mongoose.connect('mongodb://0.0.0.0:27017/testdb', {
//   useNewUrlParser: true,
// })
// var conn = mongoose.connection
// conn.on('connected', function () {
//   console.log('Database connected')
// })
// conn.on('disconnected', function () {
//   console.log('MongoDB disconnected ')
// })
// conn.on('error', console.error.bind(console))
// module.exports = conn
