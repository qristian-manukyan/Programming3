var myUniverse, matrix;
var w = 3;
var d = new Date();

var socket = io.connect('http://localhost:3000');

function setup() {
  frameRate(5);
  myUniverse = new Universe(25, 25, 22, [Grass, Xotaker, Gishatich, Amenaker]);
  matrix = myUniverse.matrix;
  createCanvas(myUniverse.width * myUniverse.side + 150, myUniverse.height * myUniverse.side);
  myUniverse.drawGrid();
  myUniverse.addPopulation({number:50,index:1});
  myUniverse.addPopulation({number:50,index:2});
  myUniverse.addPopulation({number:20,index:3});
  myUniverse.addPopulation({number:10,index:4});
}

function draw() {
  w++;
  if (w >= 50) {
    w = 0;
    myUniverse.weather.change();
  }
  myUniverse.populate();
}

setInterval(function() {
  var data = JSON.stringify({
    weather: myUniverse.weather.count,
    grass: myUniverse.creatures[0].length,
    xotaker: myUniverse.creatures[1].length,
    gishatich: myUniverse.creatures[2].length,
    amenaker: myUniverse.creatures[3].length,
    matrix: myUniverse.matrix
  });
  socket.emit('send data', data);
}, 30000);
