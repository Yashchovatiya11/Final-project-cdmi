var student_model = require('../model/studentmodel');

<<<<<<< HEAD

exports.add_student = async (req, res) => {

    req.body.photo = req.file.originalname;

=======
exports.add_student = async (req, res) => {

>>>>>>> cc1c8ff37929a7c7a72534f5e849f8fce6e96c56
    var data = await student_model.create(req.body);

    res.status(200).json({
        status: 'added student successfully',
        data
    });

}

exports.get_student = async (req, res) => {

    var id = req.params.id;

<<<<<<< HEAD
    var data = await student_model.findById(id).populate("content_id");  
    
=======
    var data = await student_model.findById(id);

>>>>>>> cc1c8ff37929a7c7a72534f5e849f8fce6e96c56
    res.status(200).json({
        status: 'view student',
        data
    });

}

<<<<<<< HEAD
exports.find_data = async (req, res) => {

    var id = req.body.id;
    var name = req.body.name;
    var contact_number = req.body.contact_number;

    

    var data = await student_model.find({id : id},{name : name},{contact_number : contact_number});  
    
    res.status(200).json({
        status: 'view student',
=======
exports.get_students = async (req, res) => {

    var id = req.body.id;
    var name = req.body.name;
    var qualification = req.body.qualification;
    var contact_no = req.body.contact_no;

    var data = await student_model.find({ id: id }, { name: name }, { qualification: qualification }, { contact_no: contact_no });

    res.status(200).json({
        status: 'find with specification',
>>>>>>> cc1c8ff37929a7c7a72534f5e849f8fce6e96c56
        data
    });

}

<<<<<<< HEAD
exports.delete_student = async(req,res) =>{
=======
exports.delete_student = async (req, res) => {
>>>>>>> cc1c8ff37929a7c7a72534f5e849f8fce6e96c56

    var v_id = req.params.id;

    var data = await student_model.findByIdAndDelete(v_id);

    res.status(200).json({
<<<<<<< HEAD
        status:"delete successfully",
=======
        status: "delete successfully",
>>>>>>> cc1c8ff37929a7c7a72534f5e849f8fce6e96c56
        status: "delete data" + v_id
    })
}

<<<<<<< HEAD
exports.update_student = async(req,res) =>{

    var v_id = req.params.id;
    
    var data = await student_model.findByIdAndUpdate(v_id , req.body);

    res.status(200).json({
        status:"update successfully",
=======
exports.update_student = async (req, res) => {

    var v_id = req.params.id;

    var data = await student_model.findByIdAndUpdate(v_id, req.body);

    res.status(200).json({
        status: "update successfully",
>>>>>>> cc1c8ff37929a7c7a72534f5e849f8fce6e96c56
        data
    })
}