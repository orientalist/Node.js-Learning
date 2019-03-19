var http=require('http');

var server=http.createServer();

server.on('request',function(req,resp){
    resp.setHeader('Content-Type','text/html; charset=utf-8');
    resp.end('<a href="#">中文字超連結</a>');
});

server.listen(3000,function(){
    console.log('Server is ready.');
});