var http=require('http')
var fs=require('fs')

var server=http.createServer()

var rootPaht='/Users/zhuangguangxiang/github/Node.js/Server/'

server.on('request',function(req,res){
    var defaultUrl='index.html'

    var url=req.url

    var resourcePath='';

    if(url!=='/')
    {
        resourcePath+=url
    }
    else{
        resourcePath+=defaultUrl
    }
    
    ReturnResource(resourcePath,res)
})

var ReturnResource=function(resourcePath,res){
    fs.readFile(resourcePath,function(err,data){
        if(err){
            res.end('404 Not Found.')
        }
        else{
            res.end(data)
        }
    })
}

server.listen(3000,function(){
    console.log('server is running');
})