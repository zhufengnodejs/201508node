var fs = require('fs');
var path = require('path');

function createFolder (src) {
    //需要创建的文件夹数组
    var needCreatFolder = [];
    //递归查找哪些文件夹是没有的
    function FNCF (src1) {
        var upSrc = path.dirname(src1);

        try {
            var stats = fs.statSync(upSrc);
            if(stats.isFile()) {
                needCreatFolder.unshift(upSrc);
                FNCF(upSrc);
            }
        } catch (err) {
            if (err != null && err.code == 'ENOENT') {
                needCreatFolder.unshift(upSrc);
                FNCF(upSrc);
            }
        }
    }

    FNCF(src);
    //把最终要创建的文件夹路径放到数组最后
    needCreatFolder.push(src);
    //开始创建所有的文件夹
    if (needCreatFolder.length == 1){
        try {
            fs.mkdirSync(src);
        } catch (e) {
            console.log(e);
        }
    } else {
        needCreatFolder.forEach(function (item, i) {
            fs.mkdirSync(item);
        });
    }
}

createFolder('d:/你好/我好/大家好');
