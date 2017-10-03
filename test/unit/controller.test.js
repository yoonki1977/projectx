describe('MainController', function(){
    beforeEach(module('demo'));
    it('Should have a todo list', inject(function($controller, $httpBackend){
        var scope = {};
        $httpBackend
        .when('GET', '/api/todo')
        .respond(['Finish First Push']);

        var myController = $controller('MainController', {$scope:scope});

        $httpBackend.flush();

        scope.list.should.not.empty;
        scope.list.should.contain('Finish First Push');
    }));

    it('Should add a new item', inject(function($controller, $httpBackend){
        var scope = {};
        $httpBackend
        .when('GET', '/api/todo')
        .respond(['Finish First Push']);

        $httpBackend        
        .when('POST', '/api/todo')
        .respond({
            status: 'Item added',
            item: "Read 'No Silver Bullet'"
        });  

        var myController = $controller('MainController', {$scope:scope});

        scope.addItem("Read 'No Silver Bullet");
        $httpBackend.flush();

        scope.list.should.contain("Read 'No Silver Bullet'");
    }));

    it('Should remove a given item', inject(function($controller, $httpBackend){
        var scope = {};
        $httpBackend
        .when('GET', '/api/todo')
        .respond(['Finish First Push']);

        $httpBackend        
        .when('DELETE', '/api/todo/'+encodeURIComponent('Finish First Push'))
        .respond({
            status: 'Item deleted',
            item: 'Finish First Push'
        });  

        var myController = $controller('MainController', {$scope:scope});

        scope.removeItem('Finish First Push');
        $httpBackend.flush();

        scope.list.should.not.contain('Finish First Push');
    }));          
});