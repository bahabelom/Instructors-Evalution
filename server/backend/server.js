require("dotenv").config();
const cors = require("cors");
const express = require("express");
const workoutRoutes = require("./routes/workouts");
const userRoutes = require("./routes/user");
const { default: mongoose } = require("mongoose");
// express app
const app = express();

// middleware
app.use(express.json());
const corsOptions = {
  origion: "*",
  Credentials: true,
  optionSuccessStatus: 200,
};
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
app.use(cors(corsOptions));
// routes
app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);
// Connect to a database

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        "Connected to database and listening on port",
        process.env.PORT
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });
// listen for requests
