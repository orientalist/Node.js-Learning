var http=require('http')
var fs=require('fs')

var server=http.createServer()

var rootDir='/Users/zhuangguangxiang/github/Node.js/Server/'

server.on('request',function(req,res){
    var content=''
    fs.readdir(rootDir,function(err,data){
        if(err){
            return res.end('Can not find dir')
        }
        else{
            data.forEach(function(item){
                content+=`
                <tr>
                    <td>${item}</td>
                </tr>`
            })
        }
    })
    fs.readFile(rootDir+'dirs.html',function(err,data){
        data=data.toString()
        data=data.replace('^_^',content)
        res.end(data)
    })
})

server.listen(3000,function(){
    console.log('Server is ready')
})