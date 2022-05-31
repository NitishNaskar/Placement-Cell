const express=require("express");
const router=express.Router();
const Student=require("../controllers/students");

router.post("/create",Student.create);
router.get("/all-student",Student.AllStudent);

module.exports=router;