function divide(a,b){
    if(b==0){
        throw Error('除数不能为零');
    }
    if(isNaN(a) || isNaN(b)){
        throw Error('除数和被除数都必须是数字');
    }
    if(a==0){
        console.log(a);
    }

    function inner(){
        console.log('b')
    }
    return a/b;
}
exports.divide = divide;