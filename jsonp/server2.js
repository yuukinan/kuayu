var http = require('http');
var url = require('url');
var querystring = require('querystring');

server = http.createServer();
server.on('request',function(req,res){
  var urlPath = url.parse(req.url).pathname;
//  console.log(urlPath); /jsonp
  var qs = querystring.parse(req.url.split('?')[1]);

 //qs.callback获取回调函数名
  console.log(qs.callback);

  if(urlPath === '/jsonp' && qs.callback){
    res.writeHead(200,{'Content-Type':'application/json;charset=utf-8'});
    var response = {
      message:'hello world'
    };
    response = JSON.stringify(response); //将js对象转换为json数据
    console.log(response);
    var callback = qs.callback + '(' + response + ')';
    res.write(callback);
    res.end();
  }else{
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
    res.end('hello world!!!');
  }
  
})

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