const { data } = require('node-persist');
var student_model = require('../model/studentmodel');
var content_model = require('../model/coursescontent');

var  current_date = new Date;

var month = current_date.getMonth();
var date = current_date.getDate();
var year = current_date.getFullYear();

var instollment_money = 10000


function getinstollment (year, month) {
    return new Date(year, month, 0).getDate();
}

// Create an array of the dates in question
function getPaymentDates(Year, startMonth, Month, termMonths) {
    return Array.from({ length: termMonths }, (v, monthset) => {

        const days = getinstollment(Year, startMonth + monthset);

        if (Month <= days) {
            return new Date(Year, startMonth + monthset , Month)
        } else {
            // Return the last day of the month 
            return new Date(Year, startMonth + monthset, 0)
        }
    });
}

// Test with some different payment days... 
const days = [2];
for(let dom of days) {
    var instollment_money = 10000;
   var datee = getPaymentDates(year, month, dom, 5).map(d => d.toLocaleDateString([]))

   console.log(datee)
//    console.log(instollment_money)
    // console.log([datee[0], instollment_money],[datee[1], instollment_money],[datee[2], instollment_money]);
}


for (let i = 0; i< 5; i++) {
    var instoll = [datee[i], instollment_money] 
    
    console.log(instoll);
}


exports.add_student = async (req, res) => {

    req.body.photo = req.file.originalname;

    req.body.instollment = instolll
    // req.body.instollment = instollment_money


    var data = await student_model.create(req.body);

    res.status(200).json({
        status: 'added student successfully',
        data
    });

}

exports.get_student = async (req, res) => {

    var id = req.params.id;

    var data = await student_model.findById(id).populate("content_id");

    res.status(200).json({
        status: 'view student',
        data
    });

}

// exports.get_students = async (req, res) => {

//     var id = req.body.id;
//     var name = req.body.name;
//     var qualification = req.body.qualification;
//     var contact_no = req.body.contact_no;

//     var data = await student_model.find({ id: id }, { name: name }, { qualification: qualification }, { contact_no: contact_no }).populate("content_id");

//     res.status(200).json({
//         status: 'find with specification',
//         data
//     });

// }

exports.delete_student = async (req, res) => {

    var v_id = req.params.id;

    var data = await student_model.findByIdAndDelete(v_id);

    res.status(200).json({
        status: "delete successfully",
        status: "delete data" + v_id
    })
}

exports.update_student = async (req, res) => {

    var v_id = req.params.id;

    var data = await student_model.findByIdAndUpdate(v_id, req.body.form_data);

    res.status(200).json({
        status: "update successfully",
        data
    })
}