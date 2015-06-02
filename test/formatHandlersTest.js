/**
 * Created by mattiden on 11.03.15.
 */
var expect = require('expect.js');
var format = require('./../handlers/formatHandlers.js');

describe('Unit tests for format functions', function(){

    it('should convert msg input to approriate JSON Object',function(done){
        var userInputString = "msg hello everyone";
        expect(format.messageToServer(userInputString).content).to.be.eql("hello everyone");
        expect(format.messageToServer(userInputString).request).to.be.eql("msg");
        done();
    });

    it('should convert login input to approriate JSON Object',function(done){
        var userInputString = "login mathias";
        expect(format.messageToServer(userInputString).content).to.be.eql("mathias");
        expect(format.messageToServer(userInputString).request).to.be.eql("login");
        done();
    });

    it('should convert help input to approriate JSON Object',function(done){
        var userInputString = "help";
        expect(format.messageToServer(userInputString).content).to.be.eql("");
        expect(format.messageToServer(userInputString).request).to.be.eql("help");
        done();
    });

    it('should convert logout input to approriate JSON Object',function(done){
        var userInputString = "logout";
        expect(format.messageToServer(userInputString).content).to.be.eql("");
        expect(format.messageToServer(userInputString).request).to.be.eql("logout");
        done();
    });

});