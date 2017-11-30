describe('MainController', function(){
    beforeEach(module('demo'));
    it('Should have a todo list', inject(function($controller, $httpBackend){
        var scope = {};
        $httpBackend
        .when('GET', '/api/todo')
        .respond([{item: 'Finish First Push', _id: 0}]);

        var myController = $controller('MainController', {$scope:scope});

        $httpBackend.flush();

        scope.list.should.not.empty;
        scope.list.should.deep.contain({item: 'Finish First Push', _id: 0});
    }));

    it('Should add a new item', inject(function($controller, $httpBackend){
        var scope = {};
        $httpBackend
        .when('GET', '/api/todo')
        .respond([{item: 'Finish First Push', _id: 0}]);

        $httpBackend        
        .when('POST', '/api/todo')
        .respond({
            status: 'Item added',
            item: {item: "Read 'No Silver Bullet'", _id: 1}
        });  

        var myController = $controller('MainController', {$scope:scope});

        scope.addItem("Read 'No Silver Bullet");
        $httpBackend.flush();

        scope.list.should.deep.contain({item: "Read 'No Silver Bullet'", _id: 1});
    }));

    it('Should remove a given item', inject(function($controller, $httpBackend){
        var scope = {};
        $httpBackend
        .when('GET', '/api/todo')
        .respond([{item: "Read 'No Silver Bullet'", _id: 0}]);

        $httpBackend        
        .when('DELETE', '/api/todo/0')
        .respond({
            status: 'Item deleted',
            item: {}
        });  

        var myController = $controller('MainController', {$scope:scope});

        scope.removeItem({item: "Read 'No Silver Bullet'", _id: 0});
        $httpBackend.flush();

        scope.list.should.deep.not.contain({item: "Read 'No Silver Bullet'", _id: 0});
    }));          
});