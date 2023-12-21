var mongoose = require('mongoose');

//schema 


var student_schema = new mongoose.Schema({

    name: {
        type: String
    },
    surname: {
        type: String
    },
    lastname: {
        type: String
    },
    email: {
        type:String
    },
    contact_number: {
        type: Number
    },
    parent_contact_number: {
        type: Number
    },
    address: {
        type: String
    },
    qualification: {
        type: String,
        default : "BCA"
    },
    photo: {
        type: String
    },
    c_name : {
        type : String,
    },
    content_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "course_content"
    },
    pc_laptop : {
        type : String,    
        dafault : "PC"
    },
    instollment : {
        type : Number,
        
    },
    time : {
        type : Number
    },
    startdate : {
        type : Date,
        dafault : Date.now()
    },
    enddate : {
        type : Date
    },
    facultyname : {
        type : String
    }


});

// module

module.exports = mongoose.model('student_data', student_schema); 