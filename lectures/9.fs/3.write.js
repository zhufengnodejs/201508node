/**
 * 写文件用writeFile
 */
var fs = require('fs');
/*
fs.writeFile('./read.txt','第一行',{encoding:'utf8',flag:'a'},function(err){
    console.error(err);
})
*/

/*
fs.appendFile('./read.txt','第一行',function(err){
    if(err)
        console.log(err);
})*/
//复制a.jpg到b.jpg

/*
var d = fs.readFileSync('./mg.gif');
console.log(d);*/

//var fs = require('fs');

fs.readFile('a.jpg', function(err, data){
    if(err){
        console.error(err);
    }else{
        fs.writeFile('a2.jpg', data, function(err){
            if(err){
                console.log(err)
            }
        })
    }
});
