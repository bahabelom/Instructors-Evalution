const express = require("express");
const {
  loginUser,
  signUpUser,
} = require("../../backend/controllers/userController");

const router = express.Router();

// login route
router.post("/login", loginUser);
// signupUser route
router.post("/signup", signUpUser);

module.exports = router;
