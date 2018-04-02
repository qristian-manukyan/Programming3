class Animal extends Organism {
    constructor(x, y, index, gender, eats, energy) {
        super(x, y, index);
        this.gender = gender;
        this.eats = eats;
        this.energy = energy;
    }
    move() {
      var cell = random(this.chooseNearbyCell(0));
      if (cell) {
        this.changeCoordinates(cell[0], cell[1]);
        return true;
      }
      return false;
    }
    eat() {
      for (var i in this.eats) {
        var targetIndex = this.eats[i];
        var target = random(this.chooseNearbyCreature(targetIndex));
        if (!target) {
          continue;
        }
        this.energy++;
        myUniverse.removeCreature(target.x, target.y);
        this.changeCoordinates(target.x, target.y);
      }
      this.energy--;
      return false;
    }
    reproduce() {
      if (this.gender != 0) {
        return false;
      }
      var partner = this.chooseNearbyCreature(this.index);
      if (partner.gender == 1) {
        var cell = random(this.chooseNearbyCell(0));
        if (cell) {
          myUniverse.addCreature(this.index, cell[0], cell[1]);
          return true;
        }
        var creature = random(this.chooseNearbyCreature(1));
        if (creature) {
          creature.die();
          myUniverse.addCreature(this.index, cell[0], cell[1]);
          return true;
        }
      }
      return false;
    }
    live() {
      if (!this.eat()) {
        if (!this.reproduce()) {
          if (!this.move()) {
            this.energy--;
            if (this.energy <= 0) {
              this.die();
            }
          }
        }
      }
    }
}
