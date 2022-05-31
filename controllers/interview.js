const Interview=require("../models/interview");

// add new student into the db
module.exports.create=function(req,res){
    let temp=req.body.name.split("++");
    let interviewInfo=Interview.create({
        i_date: req.body.date,
        s_name: temp[0],
        s_id: temp[1],
        i_company: req.body.company,
        i_result: req.body.status,
    });

    return res.redirect("back");
}