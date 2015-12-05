var fs = require('fs');

var base64 = function(path){
    fs.readFile(path,function(err,data){
        if(err){
            console.error(err);
        }else{
            // console.log(data);
            // console.log(data[0]);
            // console.log(data.length);

            var str ="";
            for(i=0;i<data.length;i++){
                str += data[i].toString(2);
            }
            //console.log(str);
            // console.log(str.length);

            var strBase = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            var newstr="";
            for(i=0;i<str.length/6;i++){
                //console.log(str)
                substr = str.slice(i*6,i*6+6);
                //console.log(substr);
                var substrnew ="00" + substr;
                //console.log(substrnew);
                // console.log(strBase[parseInt(substrnew,2)]);
                newstr += strBase[parseInt(substrnew,2)];
                //console.log(newstr);
            }
            return console.log(newstr);
        }
    })


}
base64('./read.txt');
