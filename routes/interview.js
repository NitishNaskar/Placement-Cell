const express=require("express");
const router=express.Router();
const Interview=require("../controllers/interview");

router.post("/create",Interview.create);

module.exports=router;