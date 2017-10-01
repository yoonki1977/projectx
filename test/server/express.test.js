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