const express=require("express");
const router=express.Router();
const homePage=require("../controllers/home");
const csvfile=require("../controllers/csv");

router.get("/",homePage.homePage);
router.get("/download",csvfile.downloadCSV);

router.use("/student",require("./student"));
router.use("/interview",require("./interview"));
router.use("/users",require("./users"));

module.exports=router;