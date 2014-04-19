var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('hello world');
});

app.get('/1', function(req, res){
  res.send('beans');
});

app.get('/user/:id', function(req, res){
	res.send(req.params.id);
});

app.get('/content/:id', function(req, res){
	var data = {
		"content" : "this is the content"
	};
	res.send(data.content);
});

app.listen(3000);