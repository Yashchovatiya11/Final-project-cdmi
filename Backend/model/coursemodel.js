var mongoose = require('mongoose');

//schema 

var course_schema = new mongoose.Schema ({

    c_name : {
        type : String,
    },
    content_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "course_content"
    }

})

// module

module.exports = mongoose.model('course_data', course_schema); 