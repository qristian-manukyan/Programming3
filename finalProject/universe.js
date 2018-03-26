var matrix = [];
var side = 20;
var w = 28;
var h = w;
var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var amenakerArr = [];
var weather = 4;


function fillMatrix(width, height) {
  var m = [];
  for (var y = 0; y < width; y++) {
    m.push([]);
    for (var x = 0; x < height; x++) {
      m[y].push(random([0, 1, 2, 3]));
      //m[y].push(0);
    }
  }
  m[0][0] = 3;
  return m;
}

function createObjects(mtx=matrix) {
  grassArr = [];
  xotakerArr = [];
  gishatichArr = [];
  for (var y = 0; y < mtx.length; y++) {
    for (var x = 0; x < mtx[y].length; x++) {
      if (mtx[y][x] == 1) {
        grassArr.push(new Grass(x, y));
      }
      else if (mtx[y][x] == 2) {
        xotakerArr.push(new Xotaker(x, y));
      }
      else if (mtx[y][x] == 3) {
        gishatichArr.push(new Gishatich(x, y));
      }
      else if (mtx[y][x] == 4) {
        amenakerArr.push(new Amenaker(x, y));
      }
    }
  }
}

function drawGrid(mtx=matrix) {
  for (var y = 0; y < mtx.length; y++) {
    for (var x = 0; x < mtx[y].length; x++) {
      //noStroke();
      if (mtx[y][x] == 0) {
        fill('#acacac');
        rect(x * side, y * side, side, side);
      }
      else if (mtx[y][x] == 1) {
        fill('green');
        rect(x * side, y * side, side, side);
      }
      else if (mtx[y][x] == 2) {
        fill('yellow');
        rect(x * side, y * side, side, side);
      }
      else if (mtx[y][x] == 3) {
        fill('red');
        rect(x * side, y * side, side, side);
      }
      else if (mtx[y][x] == 4) {
        fill('brown');
        rect(x * side, y * side, side, side);
      }
      else {
        fill('blue');
        rect(x * side, y * side, side, side);
      }
    }
  }
}

function populate() {
  for (var i in grassArr) {
    grassArr[i].evolve();
  }
  for (var i in xotakerArr) {
    xotakerArr[i].evolve();
  }
  for (var i in gishatichArr) {
    gishatichArr[i].evolve();
  }
  drawGrid();
}
