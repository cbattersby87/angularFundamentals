var express = require('express');
var path = require('path');
var app = express();
var rootPath = path.normalize(__dirname + '/../');

app.use(express.static(rootPath + '/app'));
app.set('view engine', 'jade');

app.get('/EventDetails', function(req,res){
    res.render('EventDetails');
})

app.listen(8000, function(){
    console.log('Listening on port 8000... ');
})