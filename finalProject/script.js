function range(start=0, end=10) {
  var n = start;
  var arr = [];
  while (n < end) {
    arr.push(n);
    n++;
  }
  return arr;
}

function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

var myUniverse = new Universe([Grass, Xotaker], 25, 25, 22);

function setup() {
  frameRate(5);
  createCanvas(myUniverse.width * myUniverse.cellSize, myUniverse.height * myUniverse.cellSize);
  myUniverse.drawGrid();
  myUniverse.addPopulation(1, 2);
}

function draw() {
  myUniverse.populate();
}
