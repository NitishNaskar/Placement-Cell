const express=require("express");
const router=express.Router();
const homePage=require("../controllers/home");

router.get("/",homePage.homePage);

router.use("/users",require("./users"));
router.use("/jobs",require("./jobs"));

module.exports=router;