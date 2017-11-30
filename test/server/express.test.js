var assert = require('assert');
var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var expect = chai.expect;
var should = chai.should();

var app = require('../../app.js');

describe('loading express', function() {   
   it('respond to /', function(done) {
       chai.request(app)
       .get('/')
       .end(function(err, res) {
           res.should.have.status(200);
           res.text.should.contains('<title>Project X</title>');
           done();
       });
   });
});

describe('TODO list', function() {   
    describe('GET /api/todo', function() {   
        it('Should return a list of todo items', function(done) {
            chai.request(app)
            .get('/api/todo')
            .end(function(err, res) {
                should.not.exist(err);           
                res.should.have.status(200);
                res.type.should.equal('application/json');
                res.body.should.be.a('array');
                done();
            });
        });
    });

    describe('POST/DELETE /api/todo', function() {
        var data;
        it('Should add a new item to the existing list', function(done) {
            chai.request(app)
            .post('/api/todo')
            .send({newItem: 'Learn F#'})
            .end(function(err, res) {
                should.not.exist(err);           
                res.should.have.status(200);
                res.type.should.equal('application/json');
                res.body.should.have.property('status').equal('Item added');
                res.body.item.should.have.property('item').equal('Learn F#');
                data = res.body.item;
                done();
            });       
        });

        it('Should have a new item after POST', function(done) {
            chai.request(app)
            .get('/api/todo')
            .end(function(err, res) {
                should.not.exist(err);           
                res.should.have.status(200);
                res.type.should.equal('application/json');
                res.body.should.be.a('array');
                res.body.should.deep.contain(data);
                done();
            });       
        });
        
        it('Should remove a given item', function(done) {
            chai.request(app)
            .delete('/api/todo/'+data._id)
            .end(function(err, res) {
                should.not.exist(err);           
                res.should.have.status(200);
                res.type.should.equal('application/json');
                res.body.should.have.property('status').equal('Item deleted');
                done();
            });       
        });

        it('Should not have a deleted item after DELETE', function(done) {
            chai.request(app)
            .get('/api/todo')
            .end(function(err, res) {
                should.not.exist(err);           
                res.should.have.status(200);
                res.type.should.equal('application/json');
                res.body.should.be.a('array');
                res.body.should.not.contains(data);
                done();
            });       
        });               
    });               
});