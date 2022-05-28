const express=require("express");
const router=express.Router();
const login=require("../controllers/user");

router.get("/sign-in",login.signInPage);
router.get("/sign-up",login.signUpPage);

module.exports=router;