const request = require('request');
const Jobs=require("../config/jobs_api");

module.exports.Jobslist=function(req,res){
    return request(Jobs, function(err,res,body){
        if(err){
            console.log("Error ! In API calling .... ");
            return;
        }
    
        console.log(body);
    });
}