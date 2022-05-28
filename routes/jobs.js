const express=require("express");
const router=express.Router();
const jobs=require("../controllers/job_list");

router.get("/",jobs.Jobslist);

module.exports=router;