var mongoose = require('mongoose');

//schema 


var faculty_schema = new mongoose.Schema({

    name: {
        type: String
    },
    department: {
        type: String
    },
    time: {
        type: Number
    }
});

// module

module.exports = mongoose.model('faculty_data', faculty_schema); 