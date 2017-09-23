var demoApp = angular.module('demo', []);
demoApp.controller('MainController', ['$scope', '$http', function($scope, $http){
    // setup a view model
    var vm = {};
    $http.get('/api/todo').then(function(response){
        vm.list = response.data.items;
    });
    vm.newItemDetails = '';

     vm.addItem = function() {
        var item = {
            details: vm.newItemDetails
        };
        $http.post('/api/todo', item).then(function(response) {
            vm.list.push(response.data.item);
        });            
        vm.newItemDetails = '';
    };  

    vm.removeItem = function(id) {
        // TODO: delete from the server
        vm.list = vm.list.filter(function (item) { return item._id !== id; });
        $http.delete('/api/todo/'+id);
    };     

    // expose vm using $scope  
    $scope.vm = vm;
}]);