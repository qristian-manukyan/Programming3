var Organism = class Organism {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
    }
    getDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x + 1, this.y],
            [this.x + 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x - 1, this.y + 1],
            [this.x - 1, this.y],
        ];
    }
    changeCoordinates(newX, newY) {
      myUniverse.changeMatrix(this.x, this.y, 0);
      this.x = newX;
      this.y = newY;
      myUniverse.changeMatrix(this.x, this.y, this.index);
    }
    chooseNearbyCell(ch) {
      this.getDirections();
      var found = [];
      for (var i = 0; i < this.directions.length; i++) {
          var x = this.directions[i][0];
          var y = this.directions[i][1];
          if (myUniverse.matrix[y] && myUniverse.matrix[y][x] == ch) {
              found.push(this.directions[i]);
          }
      }
      return found;
    }
    chooseNearbyCreature(data) {
      this.getDirections();
      var crdata = typeof data == 'number' ? {index: 1} : data;
      var found = [];
      for (var i = 0; i < this.directions.length; i++) {
        crdata.x = this.directions[0];
        crdata.y = this.directions[1];
        myUniverse.filterCreatures(data);
      }
      return found;
    }
    reproduce() {
      var cell = random(this.chooseNearbyCell(0));
      if (cell) {
        myUniverse.addCreature(this.index, cell[0], cell[1]);
        return true;
      }
    }
    die() {
        myUniverse.removeCreature(this.x, this.y);
    }
}
