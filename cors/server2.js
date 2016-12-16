var http = require('http');
server = http.createServer(function(req,res){
	res.writeHead(200,{
		'Content-Type':'text.html',
    'Access-Control-Allow-Origin':'*'
	});
	res.write('<h1>hello world!!!!</h1>');
	res.end();
});

server.listen(8088);
console.log('server started');

/*
  var express = require('express'); 
     var app = express(); 
     app.get('/', function(req, res){ 
          res.send('hello world'); 
     }); 
     app.listen('8808');
*/