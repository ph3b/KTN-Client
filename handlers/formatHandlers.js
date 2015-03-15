/**
 * Created by mattiden on 11.03.15.
 */
var moment = require('moment');

var formatMessageFromServer = function (serverObject) {
    var response = serverObject.response;
    var sender = serverObject.sender;
    var content = serverObject.content;
    var time = formatTime(serverObject.timestamp)

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return (time + " " + capitalizeFirstLetter(sender) +"(" + response + "):" + " " + content);
};
var formatTime = function (timestamp) {
    var time = moment(timestamp);
    var hours;
    var minutes;
    var seconds;
    if (time.hours() < 10) {
        hours = "0" + time.hours();
    }
    if (time.hours() > 9) {
        hours = time.hours();
    }
    if (time.minutes() < 10) {
        minutes = "0" + time.minutes();
    }
    if (time.minutes() > 9) {
        minutes = time.minutes();
    }
    if (time.seconds() < 10) {
        seconds = "0" + time.seconds();
    }
    if (time.seconds() > 9) {
        seconds = time.seconds();
    }
    return (hours + ":" + minutes + ":" + seconds)
};

var formatMessageToServer = function(string){
        var request = string.split(" ")[0];
        var content = "";
        for(var k = 1; k < string.split(" ").length; k++){
            if(k === string.split(" ").length-1){
                content += string.split(" ")[k]
            }
            else {
                content += string.split(" ")[k] + " "
            }
        }
        return ({
            "request": request,
            "content" : content
        })
};

module.exports = {
    "time": formatTime,
    "messageFromServer" : formatMessageFromServer,
    "messageToServer" : formatMessageToServer
};