var template=require('art-template')
var fs=require('fs')
var http=require('http')

var server=http.createServer()

server.on('request',function(req,res){
    fs.readFile('./template.html',function(err,data){
        if(err){
            res.end('404 not foud')
        }
        data=template.render(data.toString(),
        { title:"我是標題",h1:"哈哈哈" })
        res.end(data)
    })
})

server.listen(3000,function(){
    console.log('Server is ready')
})