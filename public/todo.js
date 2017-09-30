var demoApp = angular.module('demo', []);
demoApp.controller('MainController', ['$scope', function($scope){
    $scope.list = ['Finish First Push'];
    $scope.addItem = function(item) {
        $scope.list.push(item);
    };
}]);