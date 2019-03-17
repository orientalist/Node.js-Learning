//用node構建一個web service

//載入http核心模組
var httpService=require('http');
//建立服務器
var server=httpService.createServer();
//提供服務器服務(request,response)

//綁定portal，啟動服務器
server.listen(3000,function(){
    console.log("服務器啟動成功,可透過http://127.0.0.1:3000/進行訪問");
});

//註冊接收request監聽
server.on('request',function(){
    console.log("收到請求");
});