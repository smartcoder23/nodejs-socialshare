var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs=require('fs');
// const isClient = typeof window !== 'undefined'
//  const {fbShare}  = require('simple-social-share');
// var cors =require('cors')
/* connect to database */
var mongoose = require('mongoose');
var app = express();

// mongoose.Promise = global.Promise;
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost/dbphotogallery1');
// mongodb://<dbuser>:<dbpassword>@ds119449.mlab.com:19449/dbphotogallery1
mongoose.connect('mongodb://shubhamsethi:cssecure123@ds119449.mlab.com:19449/dbphotogallery1')
.then(() =>  console.log('connection succesful'))
.catch((err) => console.error(err));
require("./models/Photo");
/* Define routes */

var index = require('./routes/index');
var users = require('./routes/users');



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// app.engine('html',function(path,opt,fn){
//      fs.readFile(path,'utf-8',function(err,str){
//        if(err)return str;
//     else return fn(null,str);
//     })
//    })
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
app.listen(9990);
module.exports = app;
