var defer = function () {
    var succs = [];//待执行的后续任务
    var fails = [];//待执行的后续任务
    var value;//当前函数的返回值
    var status = false;//当前状态
    var promise = {
        then: function (succ,fail) {
            if (succs) {
                succs.push(succ);
                fails.push(fail);
            } else {
                if(status == 'sucess')
                    succ(value);
                else
                    fail(value);
            }
        }
    };
    return {
        promise: promise,
        resolve: function (_value) {
            if (succs) {
                value = _value;
                succs.forEach(function (cb) {
                    cb(value);
                });
                status = 'success';
                succs = undefined;
            }
        },
        reject: function (_value) {
            if (fails) {
                value = _value;
                fails.forEach(function (cb) {
                    cb(value);
                });
                status = 'fail';
                fails = undefined;
            }
        }
    }
}

var defer = defer();
var promise = defer.promise;
promise.then(function (data) {
    console.log('success',data);
},function(data){
    console.log('fail',data);
});
setTimeout(function(){
    defer.reject(100);
},2000);



