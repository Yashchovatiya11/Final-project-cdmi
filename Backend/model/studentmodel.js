var mongoose = require('mongoose');

//schema 

<<<<<<< HEAD
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
        type: String
    },
    photo: {
        type: String
    },
    c_name: {
        type: String
    },
    content_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "course_content"
    }

});
=======
var student_schema = new mongoose.Schema ({

    name : {
        type : String
    },
    surname : {
        type : String
    },
    lastname : {
        type : String
    },
    contact_no : {
        type : Number
    },
    wp_no : {
        type : Number
    },
    parents_no : {
        type : Number
    },
    address : {
        type : String
    },
    qualification : {
        type : String
    },
    photo : {
        type : String
    }

})
>>>>>>> cc1c8ff37929a7c7a72534f5e849f8fce6e96c56

// module

module.exports = mongoose.model('student_data', student_schema); 