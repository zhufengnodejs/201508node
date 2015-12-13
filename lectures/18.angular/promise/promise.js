var defer = function () {
    var pending = [];//待执行的后续任务
    var value;//当前函数的返回值
    var promise = {
        then: function (callback) {
            if (pending) {
                pending.push(callback);
            } else {
                callback(value);
            }
        }
    };
    return {
        promise: promise,
        resolve: function (_value) {
            if (pending) {
                value = _value;
                pending.forEach(function (cb) {
                    cb(value);
                });
                pending = undefined;
            }
        }
    }
}

var defer = defer();
var promise = defer.promise;
promise.then(function (data) {
    console.log(data);
});
setTimeout(function(){
    defer.resolve(100);
},2000);

setTimeout(function(){
    promise.then(function (data) {
        console.log('第二个回调函数',data);
    });
},6000);



