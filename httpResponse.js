var http=require('http');

var server=http.createServer();

server.on('request',function(request,response){
    console.log('收到請求');
    //request捕捉客戶request
    console.log('請求路徑：'+request.url);
    //response.write用以回應,可多次使用
    //注意！最後一定要response.end,否則瀏覽器位一直等待
    //沒end前不回顯示回傳訊息
    var responseWorld='';
    switch(request.url){
        case "/index":
        responseWorld="index";
        break;
        case "/register":
        responseWorld="register";
        break;
        case "/haha":
        responseWorld="haha";
        break;
    }
    response.write(responseWorld);
    response.end("response結束響應");
});

server.listen(3000,function(){
    console.log('伺服器已開啟');
});