var express = require('express');
var router = express.Router();
<<<<<<< HEAD
const multer = require('multer');

var controller = require('../controller/studentcontroller');

//multer

const storage = multer.diskStorage({
    destinatio   n: function (req, file, cb) {
        cb(null, 'public/images')
    },
    filename: function (req, file, cb) {

        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })


// course add API

router.post('/add_student', upload.single('photo'), controller.add_student);

router.get('/:id', controller.get_student);

router.get('/find', controller.find_data);

router.post('/delete_course/:id', controller.delete_student);

router.post('/update_course/:id', controller.update_student);
=======

var controller = require('../controller/studentcontroller');


// course add API

router.post('/add_student',controller.add_student);

router.get('/:id',controller.get_student);

router.get('/',controller.get_students);

router.post('/delete_student/:id',controller.delete_student);

router.post('/update_student/:id',controller.update_student);
>>>>>>> cc1c8ff37929a7c7a72534f5e849f8fce6e96c56



module.exports = router;
