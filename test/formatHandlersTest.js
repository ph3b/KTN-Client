/**
 * Created by mattiden on 11.03.15.
 */
var expect = require('expect.js');
var moment = require('moment');
var format = require('./../handlers/formatHandlers.js');

describe('Unit tests for format functions', function(){
    it('It should convert time (09:29) to format (hh:mm:ss)',function(done){
        var time = moment(1426062540081);
        expect(format.time(time)).to.be.eql("09:29:00");
        done();
    });
    it('It should convert time (13:08) to format (hh:mm:ss)',function(done){
        var time = moment(1426106649);
        expect(format.time(time)).to.be.eql("13:08:26");
        done();
    });
    it('Should convert server payload to readable string',function(done){
        var welcomeMessage = {
            'timestamp': moment(1426106649),
            'sender': 'server',
            'response': "info",
            'content': 'Welcome to chat server'
        };
        expect(format.messageFromServer(welcomeMessage)).to.be.eql("13:08:26 Server(info): Welcome to chat server");
        done();
    })
    it('should convert input to a valid json object with request and content field',function(done){
        var userInputString = "msg hello everyone"
        expect(format.messageToServer(userInputString).content).to.be.eql("hello everyone");
        expect(format.messageToServer(userInputString).request).to.be.eql("msg");
        done();
    })


});