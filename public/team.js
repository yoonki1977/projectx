angular.module('pxApp', [])
    .controller('pxCtrl', function ($http) {
        var px = this;
        $http.get('api/people')
        .then(function (response) {
            px.people = response.data;
        });      
    });