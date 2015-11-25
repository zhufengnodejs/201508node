/**
 *3. 如何读取一个txt文本，并且解决乱码问题
 */
var fs = require('fs');
/**
 * 读取文件的方法
 * @param file  文件路径
 * @param fn function 回调函数，文件的数据会被当作第一个参会数传递给回调
 */
function myReader(file, fn){
    var reader, arr = [], buf, count=0;
    if(!file){return;}
    reader = fs.createReadStream(file);
    reader.on('data', function(chunk){
        arr.push(chunk);
        count+=chunk.length;
    });

    reader.on('end', function(){
        if(arr.length == 0){return;}
        buf = new Buffer(count);
        for(var i= 0, pos = 0, len = arr.length; i<len; i++){
            arr[i].copy(buf, pos);
            pos +=arr[i].length;
        }
        fn(null, buf);
    });

    reader.on('error', function(err){
        fn(err);
    })
}


myReader("1.exec.js", function(err, data){
    if(err){
        console.log(err);
        return;
    }
    console.log(data.toString());
});

