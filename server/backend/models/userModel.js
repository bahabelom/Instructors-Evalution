const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phone_number: {
    type: Number,
    required: true,
  },
  section: {
    type: String,
  },
  year: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  status: {
    type: String,
  },
});

// static signup method

userSchema.statics.signup = async function (
  name,
  phone_number,
  section,
  year,
  email,
  password,
  role,
  status
) {
  if (!email || !password) {
    throw Error("All Fields Must be field");
  }
  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("Email Already In Use");
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({
    name,
    phone_number,
    section,
    year,
    email,
    password: hash,
    role,
    status,
  });

  return user;
};

// static login method

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All Fields Must be field");
  }

  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Incorect email ");
  }
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Incorect password ");
  }
  return user;
};

module.exports = mongoose.model("User", userSchema);
