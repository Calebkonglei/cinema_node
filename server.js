var express = require('express');
var path = require('path'); 
var mongoose = require('mongoose');
var dbConnection = 'mongodb://localhost/ticket';
mongoose.connect(dbConnection);
var port = process.env.PORT || 8080;
var app = express();
app.set('view engine', 'ejs');
app.set('views', './views');
require('./routers')(app);
// app.use('/', express.static(__dirname+'/views'))
app.listen(port, function(){
    console.log(`Express server listening on port ${port}`);
});