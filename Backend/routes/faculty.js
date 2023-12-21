var express = require('express');
var router = express.Router();

var controller = require('../controller/facultycontroller');


// course add API

router.post('/add_faculty',controller.add_faculty);

router.get('/:id',controller.get_faculty);

router.post('/delete_faculty/:id',controller.delete_faculty);

router.post('/update_faculty/:id',controller.update_faculty);



module.exports = router;
