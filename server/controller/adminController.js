require("dotenv").config();
const Admin = require("../models/adminModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, "process.env.VITE_SECRET", { expiresIn: "3d" });
};
console.log(process.env.VITE_SECRET);
//login
const loginAdmin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await Admin.login(email, password);
    const token = createToken(admin._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//signup
const signupAdmin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await Admin.signup(email, password);
    const token = createToken(admin._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { loginAdmin, signupAdmin };
