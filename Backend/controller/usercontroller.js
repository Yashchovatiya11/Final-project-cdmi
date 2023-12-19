var nodemailer = require('nodemailer');
const storage = require('node-persist');

var register_model = require('../model/usermodel');

var loginTrue = false

exports.register_user = async (req, res) => {

    var data = await register_model.find({ email: req.body.email });

    if (data.length == 1) {
        res.status(200).json({
            status: 'already register',
            data
        });
    }
    else {
        var data = await register_model.create(req.body);

        res.status(200).json({
            status: 'registerd success',
            data
        });
    }
}

exports.login_user = async (req, res) => {

    if (loginTrue == false) {

        var data = await register_model.find({ email: req.body.email });

        if (data.length == 1) {

            if (data[0].password == req.body.password) {

                loginTrue = true;

                res.status(200).json({
                    status: 'login success',
                    data
                });
            }

            else {
                res.status(200).json({
                    status: 'please chack your password',
                    data
                });
            }


        }
        else {
            res.status(200).json({
                status: 'user is not existed'
            })
        }

    }

    else {
        res.status(200).json({
            status: 'user already logged in'
        })
    }
}

exports.logout_user = (req, res) => {
    loginTrue = false

    res.status(200).json({
        status: "successfully logged out"
    })
}

exports.all_user = async (req, res) => {

    var data = await register_model.find();

    res.status(200).json({
        status: "all user ",
        data
    })

}

exports.delete_user = async (req, res) => {

    var v_id = req.params.id;

    var data = await register_model.findByIdAndDelete(v_id);

    res.status(200).json({
        status: "delete successfully logged out",
        status: "delete data" + v_id
    })
}

exports.update_user = async (req, res) => {

    var v_id = req.params.id;
    var u_email = req.body.email;
    var u_pass = req.body.password;
    var u_role = req.body.role;



    var data = await register_model.findByIdAndUpdate(v_id, { email: u_email, password: u_pass, role: u_role });

    res.status(200).json({
        status: "update successfully logged out",
        status: "update data" + v_id
    })
}

exports.send_otp = async (req, res) => {


    var code = await register_model.find({ email: req.body.email });

    console.log(code[0].email);

    var send_mail = code[0].email;

    console.log(send_mail);

    var otp = Math.floor(10000 + Math.random() * 90000);

    await storage.init( /* options ... */);
    await storage.setItem('otp', otp);

    if (code) {

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'welcome80808@gmail.com',
                pass: 'hjyalupanqtynhuq'
            }
        });

        var mailOptions = {
            from: 'welcome80808@gmail.com',
            to: send_mail,
            subject: 'Sending Email using Node.js',
            text: 'your otp is ' + otp
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });

    }

    res.status(200).json({
        status:"send successfully"
    })


}

exports.forget_pass = async (req, res) => {

    await storage.init()
    var otp = await storage.getItem('otp');
    var c_otp = req.body.otp;

    if(otp == c_otp) {

        var data = await register_model.find({email : req.body.email})

        console.log(data[0].email);

        var id = data[0].id;
        var u_password = req.body.password;

        if (data) {

            var update = await register_model.findByIdAndUpdate(id, { password : u_password });

            console.log(update);

            res.status(200).json({
                status : "Your password will be change"
            })

        }

    }
    else {
        res.status(200).json({
            status : "check otp bro"
        })
    }

}