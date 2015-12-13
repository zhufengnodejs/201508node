(function(){
    describe('HomeCtrl',function(){
       var $scope;
        beforeEach(module('testModule'));//构建模块
        beforeEach(inject(function($rootScope,$controller){
            $scope = $rootScope.$new();
            $controller('HomeCtrl',{$scope:$scope});
        }));
        it('正确的title',inject(function(){
            expect($scope.title == '珠峰培训').toBeTruthy();
        }));
    });
})();