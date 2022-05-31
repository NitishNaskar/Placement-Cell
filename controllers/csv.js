const Student = require('../models/student');
const Interview = require('../models/interview');
const {Parser} = require('json2csv');

module.exports.downloadCSV = async function(req,res){
    try{
        let interview = await Interview.find({});

        //Convert Data to json
        let exportData = [];

        for(const i of interview){
                let s = await Student.findOne({_id: i.s_id});
                let obj ={};

                obj['StudentID'] = s.s_id;
                obj['StudentName'] = s.s_name;
                obj['StudentCollege'] = s.s_college;
                obj['StudentStatus'] = s.s_status;
                obj['DSAScore'] = s.dsa_score;
                obj['WebdScore'] = s.web_score;
                obj['ReactScore'] = s.react_score;
                obj['InterviewDate'] = i.i_date;
                obj['InterviewCompany'] = i.i_company;
                obj['InterviewResult']=i.i_result;
                exportData.push(obj);
        }

        const fields = ['StudentID','StudentName','StudentCollege','StudentStatus','DSAScore','WebdScore','ReactScore','InterviewDate','InterviewCompany','InterviewResult'];

        const opts = {fields};

        //Parse the json to csv
        const parser = new Parser(opts);
        const csv = parser.parse(exportData);

        res.attachment('results.csv');
        res.status(200).send(csv);
    }catch(err){
        console.log('Error ! Exporting CSV of data controller .....',err);
        return res.redirect('back');
    }
}