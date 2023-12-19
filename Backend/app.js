var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var courseRouter = require('./routes/course');
var course_contentRouter = require('./routes/course_content');
var studentRouter = require('./routes/student');
<<<<<<< HEAD
// var facultyRouter = require('./routes/faculty');
=======
>>>>>>> cc1c8ff37929a7c7a72534f5e849f8fce6e96c56

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/course', courseRouter);
app.use('/course_content', course_contentRouter);
app.use('/student', studentRouter);
<<<<<<< HEAD
// app.use('/faculty', facultyRouter);
=======
>>>>>>> cc1c8ff37929a7c7a72534f5e849f8fce6e96c56

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
