const Students=require("../models/student");
const Interview=require("../models/interview");

module.exports.homePage=async function(req,res){
    if (!req.cookies.user_id){
       return res.redirect("/users/sign-in");
    }

    let AllStudents=await Students.find({});
    let AllInterview=await Interview.find({});

    return res.render("index",{
        students: AllStudents,
        interviews: AllInterview
    });
}