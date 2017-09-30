describe('MainController', function(){
    beforeEach(module('demo'));
    it('Should have a todo list', inject(function($controller){
        var myController = $controller('MainController');

        myController.list.should.not.empty;
        myController.list.should.contain('Finish First Push');
    }));    
});