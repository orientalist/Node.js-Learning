var fs=require('fs');
var http=require('http');

var server=http.createServer();

server.on('request',function(req,res){
    var url=req.url;
    if(url==='/'){
        fs.readFile('./resource/test.html',function(err,data){
            if(err){
                console.log('發生錯誤');
                res.setHeader('Content-Type','text/plain; charset=utf-8');
                res.end("文件讀取失敗");
            }
            else{
                console.log('已讀取文件');
                res.setHeader('Content-Type','text/html; charset=utf-8');
                res.end(data.toString());
            }
        });
    }
    else if(url==='/99.jpg'){
        fs.readFile('./99.jpg',function(err,data){
            if(err){
                console.log('發生錯誤');
                res.setHeader('Content-Type','text/plain; charset=utf-8');
                res.end("文件讀取失敗");
            }
            else{
                console.log(data);
                res.setHeader('Content-Type','image/jpeg');
                res.end(data);
            }
        });
    }
});

server.listen(3000,function(){
    console.log("server is ready");
});