var fs = require('fs');
function watch(currentStr, oldStr){
    /**
     * 监听文件的变化
     * @param curFd 当前文件的fd
     * @param preFd 修改前文件的fd
     */
    function listener(curFd, preFd) {
        //如果文件修改了
        if(Date.parse(curFd.mtime )>Date.parse( preFd.mtime)){
            fs.createReadStream(currentStr).pipe(fs.createWriteStream(oldStr));
        }else if(new Date(curFd.mtime).getTime() == 0){
            fs.unlink(oldStr);
        }
    }
    fs.watchFile(currentStr, {interval: 100}, listener);
}
watch('a.txt', 'abc/a.txt');