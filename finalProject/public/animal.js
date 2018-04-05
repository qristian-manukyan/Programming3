class Animal extends Organism {
    constructor(x, y, index, eats) {
      super(x, y, index);
      this.gender = random([0, 1]);
      this.eats = eats;
      this.energy = 50;
      this.count = 0;
    }
    move() {
      var cell = random(this.chooseCell(0));
      if (cell) {
        this.changeCoordinates(cell[0], cell[1]);
        this.energy--;
        return true;
      }
      return false;
    }
    eat() {
      for (var i in this.eats) {
        var targetIndex = this.eats[i];
        var target = random(this.chooseCell(targetIndex));
        if (target) {
          myUniverse.removeCreature(target[0], target[1], targetIndex);
          this.changeCoordinates(target[0], target[1]);
          this.energy++;
          return true;
        }
      }
      return false;
    }
    reproduce() {
      if (this.gender != 0) {
        return false;
      }
      var partnerCoords = random(this.chooseCell(this.index));
      if (partnerCoords) {
        var x = partnerCoords[0];
        var y = partnerCoords[1];
        for (var i in this.array) {
          if (this.array[i].x == x && this.array[i].y == y && this.array[i].gender == 1) {
            return super.reproduce();
          }
        }
      }
      return false;
    }
    live() {
      this.count++;
      if (this.energy < 3) {
        this.die();
        return false;
      }
      if (this.count > this.speed+10) {
        this.count = 0;
        this.reproduce();
      }
      if (!this.eat()) {
        this.move();
      }
    }
}
