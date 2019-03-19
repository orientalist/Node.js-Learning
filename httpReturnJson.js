var http=require('http');

var server=http.createServer();

server.listen(3000,function(){
    console.log("Server is ready");
});

server.on('request',function(req,resp){
    var testJson=[
        {
            "name":"Zhuang",
            "Age":"25"
        },
        {
            "name":"Guang",
            "Age":"52"
        }
    ];
    resp.end(JSON.stringify(testJson));
});