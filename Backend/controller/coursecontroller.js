var course_model = require('../model/coursemodel'); 
var content_model = require('../model/coursescontent');

exports.add_courses = async (req, res) => {

    var data = await course_model.create(req.body);

    res.status(200).json({
        status: 'added successfully',
        data
    });

}

exports.select_courses = async (req, res) => {

    var id = req.params.id;

    var data = await course_model.findById(id).populate("content_id");  
    
    res.status(200).json({
        status: 'view your course',
        data
    });

}

exports.delete_course = async(req,res) =>{

    var v_id = req.params.id;
    
    var data = await course_model.findByIdAndDelete(v_id);

    var con_id = data.content_id;

    console.log(con_id);

    var data = await content_model.findByIdAndDelete(con_id);

    res.status(200).json({
        status:"delete successfully",
        status: "delete data" + v_id
    })
}

exports.update_course = async(req,res) =>{

    var v_id = req.params.id;
    
    var data = await course_model.findByIdAndUpdate(v_id , req.body);

    res.status(200).json({
        status:"update successfully",
        data
    })
}