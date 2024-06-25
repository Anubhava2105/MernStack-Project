const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");
const Schema = mongoose.Schema;
const adminSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//static login method
adminSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }
  const match_email = await this.findOne({ email });
  if (!match_email) {
    throw Error("Incorrect Email address");
  }
  const match = await bcrypt.compare(password, match_email.password);
  if (!match) {
    throw Error("Incorrect Password");
  }
  return match_email;
};

//static signup method
adminSchema.statics.signup = async function (email, password) {
  //validation
  if (!email || !password) {
    throw Error("All fields must be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Invalid email");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Weak Password");
  }
  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("Email already exists");
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const admin = await this.create({ email, password: hash });

  return admin;
};

module.exports = mongoose.model("Admin", adminSchema);
