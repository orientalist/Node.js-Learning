var http=require('http');

var server=http.createServer();

server.on('request',function(req,resp){
    resp.setHeader('Content-Type','text/plain; charset=utf-8');
    resp.end('中文字');
});

server.listen(3000,function(){
    console.log('Server is ready.');
});