const app = require('express')()
var server = app.listen(8082, '127.0.0.1', function () {
  console.log("Server is starting at port 8082")
});
var dataNaturalSelection = [];
const io = require('socket.io')(server);
const fs = require('fs');
io.on('connection', function (socket) {
  socket.on('RestartNSS', () => socket.emit('RestartNSS'));
  socket.on('SendRawCurrentInformation', function (data) {
    if(data.date == 0 && dataNaturalSelection.length <= 0){
        dataNaturalSelection = [];
        return false;
    }
    console.log(computeNaturalSelection(data));
  });
});

function computeNaturalSelection(e){
    var count = 0;
    var creature = 0;
    var speed = 0;
    var size = 0;
    var sense = 0;
    for(var z in e.creatures){
        var currentCreature = e.creatures[z];
        speed += currentCreature.speed;
        size += currentCreature.size;
        sense += currentCreature.sense;
        count++;
    }
    creature += Object.keys(e.creatures).length;

    return { creatures: creature, speed: (speed/count).toFixed(3), size: (size/count).toFixed(3), sense: (sense/count).toFixed(3) };
}
