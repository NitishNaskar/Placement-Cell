const Student=require("../models/student");

// add new student into the db
module.exports.create=function(req,res){
    console.log(req.body);
    Student.create({
        s_id: req.body.sid,
        s_name: req.body.name,
        s_college: req.body.college,
        s_status: req.body.status,
        dsa_score: req.body.dsa,
        web_score: req.body.web,
        react_score: req.body.react
    });

    return res.redirect("back");
}

module.exports.AllStudent=async function(req,res){
    let AllStudents=await Student.find({});
    return res.json(200,AllStudents);
}