var demoApp = angular.module('demo', []);
demoApp.controller('MainController', ['$scope', '$http', function($scope, $http){
    $scope.list = [];
    $http.get('/api/todo')
    .then(function(response){
        $scope.list = response.data;
    });
        
    $scope.addItem = function(item) {
        $scope.list.push(item);
    };
}]);