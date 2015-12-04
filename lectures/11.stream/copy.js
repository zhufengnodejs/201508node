/**
 * Created by 吴世界 on 2015/11/28.
 */
var fs = require('fs');
function copy(src, desc){
    var rs = fs.createReadStream(src);
    var ws = fs.createWriteStream(desc);

    rs.on('data', function(data){
        rs.pause();
        ws.write(data);
        rs.resume();
    });
}
copy('write.txt','read2.txt');

//move('read.txt','read2.txt');