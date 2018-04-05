class Organism {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.array = myUniverse.getCreatureArrByIndex(this.index);
        matrix[this.y][this.x] = this.index;
    }
    getNewDirections() {
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
    changeCoordinates(x, y) {
      matrix[this.y][this.x] = 0;
      this.x = x;
      this.y = y;
      matrix[this.y][this.x] = this.index;
    }
    chooseCell(ch) {
        this.getNewDirections();
        var found = [];
        for (var i = 0; i < this.directions.length; i++) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (matrix[y] && matrix[y][x] == ch) {
                found.push(this.directions[i]);
            }
        }
        return found;
    }
    reproduce() {
      var cell = random(this.chooseCell(0));
      if (cell) {
        var x = cell[0];
        var y = cell[1];
        this.array.push(new window[this.constructor.name](x, y));
        matrix[y][x] = this.index;
        return true;
      }
      return false;
    }
    die() {
      myUniverse.removeCreature(this.x, this.y, this.index);
    }
}
