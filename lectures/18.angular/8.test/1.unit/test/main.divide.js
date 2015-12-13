var divide = require('../divide');
var should = require('should');
/**
 * 分组
 *  测试用例
 */
describe('我要测试一个除法的函数',function(){
  it('4除以2等2',function(){
      divide.divide(4,2).should.equal(2);
  });
    it('除数不能为零',function(){
        (function(){
            divide.divide(4,0)
        }).should.throw('除数不能为零');
    });
    it('除数和被除数都必须是数字',function(){
        (function(){
            divide.divide("a","b")
        }).should.throw('除数和被除数都必须是数字');
    });
    it('a==0',function(){
        divide.divide(0,1)
    });
});
