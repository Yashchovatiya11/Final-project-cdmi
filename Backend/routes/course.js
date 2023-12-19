var express = require('express');
var router = express.Router();

var controller = require('../controller/coursecontroller');


// course add API

router.post('/add_course',controller.add_courses);

router.get('/:id',controller.select_courses);

router.post('/delete_course/:id',controller.delete_course);

router.post('/update_course/:id',controller.update_course);



module.exports = router;
