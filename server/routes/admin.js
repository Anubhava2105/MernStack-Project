const express=require('express');
const {loginAdmin, signupAdmin}=require('../controller/adminController');
const router = express.Router();

//login
router.post('/login', loginAdmin);

//signup
router.post('/signup', signupAdmin);


module.exports = router;