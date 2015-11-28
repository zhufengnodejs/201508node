/**
 * Created by Administrator on 15-11-28.
 */
/**
 * 写入流 把数据写到文件里面去
 *
 */
var fs = require('fs');
/*
for(var i=0;i<100;i++){
    ws.write(i+"");
}
*/


function copy(src,desc){

    var rs = fs.createReadStream(src);
    var ws = fs.createWriteStream(desc);
    rs.on('open',function(){
        console.log('open');
    });
    rs.on('data',function(data){

        var flag = ws.write(data); //返回 true 写入成功 false 写入成功
        if(!flag)
            rs.pause();
    });
    rs.on('drain',function(){ //监听drain事件  当写入成功恢复，继续监听data事件
        rs.resume();
    });
    rs.on('end',function(){
        console.log('end')
    });
    rs.on('close',function(){
        console.log('close');
    });
    rs.on('error',function(err){
        console.log(err)
    })
}

copy('./a.txt','./b.txt');
