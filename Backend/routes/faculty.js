var express = require('express');
var router = express.Router();


// course add API

router.post('/add_faculty', controller.add_student);

router.get('/:id', controller.get_student);

router.get('/find', controller.find_data);

router.post('/delete_course/:id', controller.delete_student);

router.post('/update_course/:id', controller.update_student);



module.exports = router;