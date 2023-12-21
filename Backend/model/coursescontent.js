var mongoose = require('mongoose');

//schema 

var course_content_schema = new mongoose.Schema ({

    c_content : {
        type : String,
    },
    course_fee : {
        type : Number
    },
    course_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "course_data"
    },
    course_idd : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "student_data"
    }

})

// module

module.exports = mongoose.model('course_content', course_content_schema); 