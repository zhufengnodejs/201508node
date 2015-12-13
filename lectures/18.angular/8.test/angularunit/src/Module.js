angular.module('testModule',['ngResource','ngMock']);
angular.module('testModule').controller('HomeCtrl',function($scope,UserFactory){
    $scope.title = '珠峰培训';
    $scope.users = UserFactory.query();
});

angular.module('testModule').factory('UserFactory',function($resource){
    return $resource('User/users.json');
});

angular.module('testModule').directive('sayHello',function(){
    return {
        replace:true,
        template:'<h1>hello</h1>'
    }
});

angular.module('testModule').filter('bigger',function(){
    return function(input){
        return input + 'bigger';
    }
});