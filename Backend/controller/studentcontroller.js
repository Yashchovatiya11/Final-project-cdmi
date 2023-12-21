var student_model = require('../model/studentmodel');

exports.add_student = async (req, res) => {

    req.body.photo = req.file.originalname;

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

    var data = await student_model.findByIdAndUpdate(v_id, req.body);

    res.status(200).json({
        status: "update successfully",
        data
    })
}