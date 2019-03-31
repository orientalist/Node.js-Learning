var http=require('http')
var fs=require('fs')
var artModule=require('art-template')
//本套件可以解析url,分析出路徑及querystring等
var urlParse=require('url')

var comments=[
    {
        name:"Zhuang",
        message:"我好爽",
        dateTime:"2019/03/22"
    },
    {
        name:"Guang",
        message:"我好不爽",
        dateTime:"2019/02/04"
    },
    {
        name:"Xiang",
        message:"今天天氣真晴朗",
        dateTime:"2019/01/03"
    }
]

http.createServer(function(req,res){
    //第二個參數若為true則會將queryString解析為陣列
    //例 ?name=Sam&age=25解析後{name:'Sam',age:'25'}
    //透過.query可取得陣列
    var urlObj=urlParse.parse(req.url,true)
    var url=urlObj.pathname
    if(url.indexOf('/public/')===0){
        fs.readFile('.'+url,function(err,data){
            if(err){
                res.end('404 not found')
            }
            res.end(data)
        })
    }
    else{
        switch(url){
            case '/':
            fs.readFile('./views/index.html',function(err,data){
                if(err){
                    res.end('404 not found')
                }
                var htmlStr=artModule.render(data.toString(),{comments:comments})
                res.end(htmlStr)
            })
            break;
            case '/post':
            fs.readFile('./views/post.html',function(err,data){
                if(err){
                    res.end('404 not found')
                }
                res.end(data)
            })
            break;
            case "/comment":
            var query=urlObj.query
            query.dateTime='2019/03/30'
            comments.push(query)
            res.statusCode=302
            res.setHeader('Location','/')
            res.end()
            break;
            default:
            res.end('404 not found')
            break;
        }
    }
}).listen(3000,function(){
    console.log('server is ready')
})