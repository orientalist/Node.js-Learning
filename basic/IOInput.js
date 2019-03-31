var fs=require('fs');
fs.writeFile('./IOInput.txt','寫入成功',function(err){
    if(err!=null){
        console.log(err);
    }
    else{
        console.log("文件寫入成功");
    }
});