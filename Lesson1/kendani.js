class KendaniEak {
  constructor(x, y, index) {
    this.x = x;
    this.y = y;
    this.index = index;
    this.directions = [
      [this.x - 1, this.y - 1],
      [this.x    , this.y - 1],
      [this.x + 1, this.y - 1],
      [this.x + 1, this.y    ],
      [this.x + 1, this.y + 1],
      [this.x    , this.y + 1],
      [this.x - 1, this.y + 1],
      [this.x - 1, this.y    ],
    ];
    this.energy = 8;
    this.multiply = 0;
  }
  yntrelVandak(ch) {
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
  stanalNorKoordinatner() {
    this.directions = [
      [this.x - 1, this.y - 1],
      [this.x    , this.y - 1],
      [this.x + 1, this.y - 1],
      [this.x + 1, this.y    ],
      [this.x + 1, this.y + 1],
      [this.x    , this.y + 1],
      [this.x - 1, this.y + 1],
      [this.x - 1, this.y    ],
    ];
  }
  sharjvel() {
    var field = random(this.chooseNearFieldsByIndex(0));
    if (field) {
      matrix[this.y][this.x] = 0;
      this.x = field[0];
      this.y = field[1];
      matrix[this.y][this.x] = this.index;
      this.energy--;
      return true;
    }
    return false;
  }
  bazmanal() {
    var field = random(this.yntrelVandak(0));
    if (field) {
      var x = field[0];
      var y = field[1];
      matrix[y][x] = 1;
      grassArr.push(new Grass(x, y));
    }
  }
}
