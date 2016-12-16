/*
var http = require("http");
server = http.createServer(function(req,res){
	res.writeHead(200,{
		'Content-Type':'text/plain'
	});
	res.write('Hello World');
	res.end();
});
server.listen(80);
console.log('server started');
*/

var express = require('express'),
    app = express(),
    server = require('http').createServer(app);

app.use('/',express.static("F:/web_demo/kuaYu/jsonp"));
server.listen(8086);
console.log('server started');


