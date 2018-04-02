var Universe = class Universe {
  constructor(creatureConsts, width=25, height=25, cellSize=15, colors) {
    this.width = width;
    this.height = height;
    this.cellSize = cellSize;
    this.matrix = this.generateEmptyMatrix(this.width, this.height);
    this.creatureConsts = creatureConsts;
    this.creatures = [];
    this.colors = colors || ['#acacac', 'green', 'yellow', 'red', 'brown'];
  }
  generateEmptyMatrix(width, height) {
    var mtx = [];
    for (var y = 0; y < width; y++) {
      mtx.push([]);
      for (var x = 0; x < height; x++) {
        mtx[y].push(0);
      }
    }
    return mtx;
  }
  changeMatrix(x, y, val) {
    this.matrix[y][x] = val;
    this.drawGrid();
  }
  drawGrid() {
    background(this.colors[0]);
    for (var y = 0; y < this.height; y++) {
      for (var x = 0; x < this.width; x++) {
        var index = this.matrix[y][x];
        fill(this.colors[index]);
        rect(x * this.cellSize, y * this.cellSize, this.cellSize / 1.1, this.cellSize / 1.1);
      }
    }
  }
  findCreatureByCoordinates(x, y) {
    for (var i in this.creatures) {
      var creature = this.creatures[i];
      if (creature.x == x && creature.y == y) {
        return [creature, i];
      }
    }
    return false;
  }
  filterCreatures(data) {
    var found = [];
    for (var i in this.creatures) {
      var creature = this.creatures[i];
      for (var j in data) {
        if (creature[j] == data[j]) {
          found.push(creature);
        }
        continue;
      }
    }
    return found;
  }
  addCreature(index, x, y) {
    var creatureConst = this.creatureConsts[index-1];
    this.removeCreature(x, y);
    this.creatures.push(new window[creatureConst.name](x, y));
    this.changeMatrix(x, y, index);
  }
  removeCreature(x, y) {
    var creatureData = this.findCreatureByCoordinates(x, y);
    if (creatureData) {
      this.creatures.splice(creatureData[1], 1);
      this.changeMatrix(x, y, 0);
      return true;
    }
    return false;
  }
  addPopulation(index, count) {
    var n = count;
    while (n > 0) {
      var creatureConst = this.creatureConsts[index-1];
      var x = random(range(0, this.width));
      var y = random(range(0, this.height));
      this.addCreature(index, x, y);
      n--;
    }
    this.drawGrid();
  }
  populate() {
    for (var i = 0; i < this.creatures.length; i++) {
      this.creatures[i].live();
    }
    this.drawGrid();
  }
}
