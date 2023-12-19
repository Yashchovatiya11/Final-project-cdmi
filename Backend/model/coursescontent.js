var mongoose = require('mongoose');

//schema 

var course_content_schema = new mongoose.Schema ({

    c_content : {
        type : String,
    },
    course_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "course_data"
    }

})

// module

module.exports = mongoose.model('course_content', course_content_schema); 