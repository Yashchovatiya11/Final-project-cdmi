var faculty_model = require('../model/facultymodel');

exports.add_faculty = async (req, res) => {

    var data = await faculty_model.create(req.body);

    res.status(200).json({
        status: 'added faculty successfully',
        data
    });

}

exports.get_faculty = async (req, res) => {

    var id = req.params.id;

    var data = await faculty_model.findById(id);

    res.status(200).json({
        status: 'view faculty',
        data
    });

}

exports.delete_faculty = async (req, res) => {

    var v_id = req.params.id;

    var data = await faculty_model.findByIdAndDelete(v_id);

    res.status(200).json({
        status: "delete successfully",
        status: "delete data" + v_id
    })
}

exports.update_faculty = async (req, res) => {

    var v_id = req.params.id;

    var data = await faculty_model.findByIdAndUpdate(v_id, req.body);

    res.status(200).json({
        status: "update successfully",
        data
    })
}