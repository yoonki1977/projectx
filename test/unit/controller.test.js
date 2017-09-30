describe('MainController', function(){
    beforeEach(module('demo'));
    it('Should have a todo list', inject(function($controller){
        var scope = {};
        var myController = $controller('MainController', {$scope:scope});

        scope.list.should.not.empty;
        scope.list.should.contain('Finish First Push');
    }));

    it('Should add a new item', inject(function($controller){
        var scope = {};
        var myController = $controller('MainController', {$scope:scope});

        scope.addItem("Read 'No Silver Bullet");
        scope.list.should.contain("Read 'No Silver Bullet");
    }));      
});