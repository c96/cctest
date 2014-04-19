var fs = require('fs'); // require the filesystem api
var express = require('express');
var app = express();
var mustache = require('mustache');

app.get('/', function(req, res){

    var view = {
        title: "Home",
        calc: function () {
            return 2 + 4;
        }
    };

});

// app.get('/projects', function(req, res){
//   res.send('Projects');
// });

// app.get('/about', function(req, res){
//   res.send('About');
// });

app.get('/:slug', function(req, res){ // get the url and slug info

    var view = {
        title: "Home",
        calc: function () {
            return 2 + 4;
        }
    };

    var slug = "templates/" + [req.params.slug][0] + ".html"; // grab the page slug
    var rData = view; // wrap the data in a global object... (mustache starts from an object then parses)
    var page = fs.readFileSync(slug, "utf8"); // bring in the HTML file
    var html = mustache.to_html(page, rData); // replace all of the data
    res.send(html); // send to client

});

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
