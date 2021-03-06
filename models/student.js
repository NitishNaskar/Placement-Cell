const mongoose = require('mongoose');

const studentSchema=new mongoose.Schema({
    s_id:{
        type: String,
        required: true
    },
    s_name:{
        type: String,
        required: true
    },
    s_college:{
        type: String,
        required: true
    },
    s_status:{
        type: String,
        required: true
    },
    dsa_score:{
        type: Number,
    },
    web_score:{
        type: Number,
    },
    react_score:{
        type: Number,
    }
});

const Student= mongoose.model('Student', studentSchema);
module.exports = Student;