const mongoose=require("mongoose");

const InterviewSchema=new mongoose.Schema({
    i_date:{
        type: String,
        required: true
    },
    s_id:{
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    },
    s_name:{
        type:  String,
        required: true
    },
    i_company:{
        type: String,
        required: true
    },
    i_result:{
        type: String,
        required: true
    }
});

const Interviews= mongoose.model('Interviews', InterviewSchema);
module.exports = Interviews;