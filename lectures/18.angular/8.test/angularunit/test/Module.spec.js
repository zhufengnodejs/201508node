(function(){
    describe('HomeCtrl',function(){
       var $scope;//声明一个变量
        beforeEach(module('testModule'));//构建模块
        beforeEach(inject(function($rootScope,$controller){
            $scope = $rootScope.$new();//创建一个新的scope
            $controller('HomeCtrl',{$scope:$scope});
        }));
        it('正确的title',inject(function(){
            expect($scope.title == '珠峰培训').toBeTruthy();
        }));
    });
    //测试指令
    describe('HomeCtrl',function(){
        var $compile;// 编辑服务
        var $rootScope;//根作用域
        var $httpBackend;// 模拟后台服务
        beforeEach(module('testModule'));//构建模块
        //注入的时候找服务器的会把下划线去掉
        beforeEach(inject(function(_$compile_,_$rootScope_,_$httpBackend_){
            $compile = _$compile_;
            $rootScope =_$rootScope_;
            $httpBackend = _$httpBackend_;
            $httpBackend.when('POST','/users/validate').respond({username:'张三'});
        }));
        it('指令内容是否进行了真正的替换',function(){
            var element = $compile('<say-hello></say-hello>')($rootScope);
            $rootScope.$digest();//触发所有监听
            console.log(element.html());
            expect(element.html()).toContain('hello');
        });
    });
    //测试过滤 器
    describe('测试过滤器',function(){
        beforeEach(module('testModule'));//构建模块
        var bigger;
        beforeEach(inject(function($filter){
            bigger = $filter('bigger');
        }));
        it('add bigger',function(){
            expect(bigger('original')).toEqual('originalbigger');;
        });
    });

    describe('测试http',function(){
        beforeEach(module('testModule'));//构建模块
       var scope,$httpBackend;
        beforeEach(inject(function($controller,$rootScope,_$httpBackend_){
            $httpBackend = _$httpBackend_;
            $httpBackend.when('GET','User/users.json').respond([{username:'张三'},{username:'李四'}]);
            scope = $rootScope.$new();
            $controller('HomeCtrl',{$scope:scope});
        }));
        it('应该返回2个用户',function(){
            $httpBackend.flush();// 模拟后台返回响应
            expect(scope.users.length).toBe(2);
        });
    });
})();