var content_model = require('../model/coursescontent');
var course_model = require('../model/coursemodel');

exports.add_course_content = async (req,res) => {

    var id = req.params.id;

    req.body.course_id = id;

    var data = await content_model.create(req.body);

    await course_model.findByIdAndUpdate(id, {"content_id" : data.id});

    res.status(200).json({
        status : "added content successfully",
        data
    })
}

exports.select_content = async (req,res) => {

    var id = req.params.id;

    var data = await content_model.findById(id).populate("course_id");  
    
    res.status(200).json({
        status : "this is your course",
        data
    })

}

exports.delete_content = async(req,res) =>{

    var v_id = req.params.id;

    var data = await course_model.findByIdAndDelete(v_id);

    res.status(200).json({
        status:"delete successfully",
        status: "delete data" + v_id
    })
}

exports.update_content = async(req,res) =>{

    var v_id = req.params.id;
    
    var data = await course_model.findByIdAndUpdate(v_id , req.body);

    res.status(200).json({
        status:"update successfully",
        data
    })
}