var fs=require('fs');
fs.readFile('./test.txt',function(error,data){
	if(error){
		console.log("文件讀取失敗");
		return;
	}
	console.log(data.toString());
});
