class Grass extends KendaniEak {
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
