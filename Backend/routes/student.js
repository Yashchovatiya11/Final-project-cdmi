var express = require('express');
var router = express.Router();
const multer = require('multer');

var controller = require('../controller/studentcontroller');

//multer

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
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

// router.get('/', controller.get_students);

router.post('/delete_course/:id', controller.delete_student);

router.post('/update_course/:id', controller.update_student);



module.exports = router;
