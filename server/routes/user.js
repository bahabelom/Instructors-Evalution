const router = require("express").Router();
const Users = require("../models/Users");
router.get("/", (req, res) => {
  res.send("Hello Users Homepage");
});
router.get("/register", async (req, res) => {
  const users = await new Users({
    name: "Bahabelmedhn",
    age: "27",
    gender: "male",
  });
  try {
    const user = await users.save();
    res.status(200).json();
  } catch (error) {}
});
module.exports = router;
