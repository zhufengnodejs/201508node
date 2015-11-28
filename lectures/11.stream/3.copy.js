var fs=require("fs");
copy("./a.text","./b.text")
//Stream.prototype.pipe
function copy(src,desc){
    var rs = fs.createReadStream(src);
    var ws = fs.createWriteStream(desc);
    rs.pipe(ws);
}

