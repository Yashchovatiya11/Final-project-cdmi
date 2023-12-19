var express = require('express');
var router = express.Router();

var controller = require('../controller/coursescontent')

// courses content

router.post('/add_content/:id',controller.add_course_content);

router.get('/:id',controller.select_content);

router.post('/delete_content/:id',controller.delete_content);

router.post('/update_content/:id',controller.update_content);

module.exports = router;
