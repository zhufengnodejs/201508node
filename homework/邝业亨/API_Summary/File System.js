var fs = require('fs');
var pd = require('path').dirname;
var myDocPath = pd(__dirname);
//console.log(myDocPath);
console.log(fs.statSync(myDocPath+'/API_Summary/URL.js'));
//console.log(fs.accessSync(myDocPath+'/API_Summary/URL.js',fs.W_OK));
//console.log(myDocPath+'\\API_Summary\\URL.js');
//fs.access(myDocPath+'/API_Summary/URL.js',fs.X_OK,function (err) {
//    console.log(err);
//});

//fs.open();        //打开文件
//fs.mkdir();       //创建文件夹，默认权限777
//fs.stat();
//fs.access();      //判断对文件拥有的权限
//fs.read();        //读取数据从指定文件的fd里
//fs.readFile();    //读取文件数据
//fs.write();       //将一个buffer写入fd
//fs.wiriteFile();  //数据写入文件
//fs.watch();       //监听文件
//fs.rename();      //重命名
//fs.chmod();       //更改权限