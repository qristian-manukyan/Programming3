class Universe {
  constructor(width, height, side, creatureConsts) {
    this.width = width;
    this.height = height;
    this.side = side;
    this.creatureConsts = creatureConsts;
    this.creatures = this.generateCreatureArrs();
    this.matrix = this.generateEmptyMatrix();
    this.weather = new Weather();
  }
  generateEmptyMatrix() {
    var matrix = [];
    for (var y = 0; y < this.width; y++) {
      matrix.push([]);
      for (var x = 0; x < this.height; x++) {
        matrix[y].push(0);
      }
    }
    return matrix;
  }
  generateCreatureArrs() {
    var creatures = [];
    for (var i in this.creatureConsts) {
      creatures.push([]);
    }
    return creatures;
  }
  getCreatureArrByIndex(index) {
    return this.creatures[index-1];
  }
  getCreatureConstByIndex(index) {
    return this.creatureConsts[index-1];
  }
  drawGrid() {
    background(this.weather.currentColors[0]);
    stroke('black');
    for (var y = 0; y < this.width; y++) {
      for (var x = 0; x < this.height; x++) {
        fill(this.weather.currentColors[this.matrix[y][x]]);
        rect(x * this.side, y * this.side, this.side/1.1, this.side/1.1);
      }
    }
    this.displayStatistics();
  }
  displayStatistics() {
    var x = myUniverse.width * myUniverse.side;
    var y = myUniverse.height * myUniverse.side;
    line(x, 0, x, y);
    textSize(18);
    fill(myUniverse.weather.currentColors[1]);
    text('Weather: ' + myUniverse.weather.count, x + 10, 30);
    fill('green');
    text('Grass: ' + myUniverse.creatures[0].length, x + 10, 50);
    fill('yellow');
    text('Xotaker: ' + myUniverse.creatures[1].length, x + 10, 70);
    fill('red');
    text('Gishatich: ' + myUniverse.creatures[2].length, x + 10, 90);
    fill('brown');
    text('Amenaker: ' + myUniverse.creatures[3].length, x + 10, 110);
  }
  disaster() {
    if (random(range()) < 9) {
      return false;
    }
    var x = random(range(0, this.width));
    var y = random(range(0, this.height));
    var a = random(range(2, Math.min(this.width - x, this.height - y)));
    if (!a) {
      return false;
    }
    fill(255, 0, 0, 100);
    noStroke();
    rect(x * myUniverse.side, y * myUniverse.side, a * myUniverse.side, a * myUniverse.side);
    for (var i in this.creatures) {
      for (var j in this.creatures[i]) {
        var creature = this.creatures[i][j];
        var cond1 = x <= creature.x && creature.x <= x + a;
        var cond2 = y <= creature.y && creature.y <= y + a;
        if (cond1 && cond2) {
          creature.die();
        }
      }
    }
  }
  findCreature(x, y, index, getCount=false) {
    var creatureArr = this.getCreatureArrByIndex(index);
    for (var i in creatureArr) {
      var creature = creatureArr[i];
      if (creature.x == x && creature.y == y) {
        if (getCount) {
          return i;
        }
        return creature;
      }
    }
    return false;
  }
  addCreature(x, y, index) {
    var creatureConst = this.getCreatureConstByIndex(index);
    var creatureArr = this.getCreatureArrByIndex(index);
    this.removeCreature(x, y, index);
    creatureArr.push(new creatureConst(x, y));
  }
  removeCreature(x, y, index) {
    var creatureArr = this.getCreatureArrByIndex(index);
    var creatureCount = this.findCreature(x, y, index, true);
    if (creatureArr && creatureArr[creatureCount]) {
      creatureArr.splice(creatureCount, 1);
      this.matrix[y][x] = 0;
      return true;
    }
    return false;
  }
  addPopulation(data) {
    if (!data.number || !data.index) {
      return false;
    }
    var count = 0;
    while (count < data.number) {
      var x = data.x == undefined ? random(range(0, this.width)) : data.x;
      var y = data.y == undefined ? random(range(0, this.height)) : data.y;
      this.addCreature(x, y, data.index);
      count++;
    }
  }
  populate() {
    myUniverse.addPopulation({index:2, number:5})
    if (this.creatures[3].length == 0) {
      noLoop();
      fill('black');
      textSize(40);
      text('Game Over', 100, 100);
      clearInterval();
      return false;
    }
    for (var i in this.creatures) {
      for (var j in this.creatures[i]) {
        this.creatures[i][j].speed = myUniverse.weather.count+1;
        this.creatures[i][j].live();
      }
    }
    myUniverse.drawGrid();
    this.disaster();
  }
}

var Weather = class Weather {
  constructor() {
    this.count = 3;
    this.colors = [
      ['#acacac', 'white', 'yellow', '#f46141', '#994141'],
      ['#acacac', 'orange', '#f4dc42', '#f45841', '#893b3b'],
      ['#acacac', '#78b766', '#f4d341', '#f44141', '#703b3b'],
      ['#acacac', 'green', '#f4dc42', '#f44141', '#664040']
    ];
    this.currentColors = this.colors[this.count];
  }
  change() {
    this.count++;
    if (this.count == 4) {
      this.count = 0;
    }
    this.currentColors = this.colors[this.count];
  }
}

function range(start=0, end=11) {
  var n = start;
  var arr = [];
  while (n < end) {
    arr.push(n);
    n++;
  }
  return arr;
}

function random(arr) {
  var i = Math.floor(Math.random() * arr.length);
  return arr[i];
}
