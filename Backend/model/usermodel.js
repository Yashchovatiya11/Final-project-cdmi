var mongoose = require('mongoose');

//schema 

var register_schema = new mongoose.Schema ({

    email : {
        type : String,
    },
    password : {
        type : String,
    },
    role : {
        type : String,
        enum : ["1" , "2" , "3"],
        default : "1"
    }

})

// module

module.exports = mongoose.model('register',register_schema);