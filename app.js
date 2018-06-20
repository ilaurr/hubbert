var express = require('express');
var path = require('path');
//var bodyp = require ('body-parser');


var indexRouter = require('./routes/index');
var lightsRouter = require('./routes/lights');
var groupRouter = require('./routes/groups');

var app = express();

//app.use(bodyp.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/lights', lightsRouter);
app.use('/groups', groupRouter);

app.listen (8081, function (){
    console.log ('App listening');
})

module.exports = app;
