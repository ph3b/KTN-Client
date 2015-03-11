/**
 * Created by mattiden on 11.03.15.
 */
var sys = require('sys');
var webSocket = require('ws');
var moment = require('moment');
var format = require('./handlers/formatHandlers.js');

var stdin = process.openStdin();

var clientSocket = new webSocket('ws://localhost:2337');
var counter = 0;

clientSocket.on('open', function () {
    clientSocket.onmessage = function(response) {
        var payload = JSON.parse(response.data);
        console.log(format.messageFromServer(payload));
    };
    stdin.addListener("data", function(input) {
        var userInput = input.toString().substring(0, input.length-1)
        var userInputJsonObject = format.messageToServer(userInput);
        clientSocket.send(JSON.stringify(userInputJsonObject))
    });
});
