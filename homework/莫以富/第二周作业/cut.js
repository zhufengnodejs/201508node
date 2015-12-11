var fs = require('fs');
function cut(src, dest){
    var reader = fs.createReadStream(src);
    var writer = fs.createWriteStream(dest);
    reader.on('data', function(data){
        var flag = writer.write(data);
        if(!flag){
            reader.pause();
        }
    });
    reader.on('close', function(){
        fs.unlink(src);
    });
    writer.on('drain', function(){
        reader.resume();
    });
}
cut('../qq.jpg', "qq.jpg");