class Animal extends Organism {
    constructor(x, y, index, array, gender, eats, targetArr) {
        super(x, y, index, array);
        this.gender = gender;
        this.eats = eats;
        this.targetArr = targetArr;
        this.energy = 1;
    }
    move() {
        var cell = random(this.chooseCell(0));
        if (cell) {
            this.moveTo(cell[0], cell[1]);
        }
    }
    moveTo(newX, newY) {
        matrix[this.y][this.x] = 0;
        this.x = newX;
        this.y = newY;
        matrix[this.y][this.x] = this.index;
    }
    eat() {
        for (var ti in this.eats) {
            var targetCoords = random(this.chooseCell(this.eats[ti]));
            if (!targetCoords) {
                continue;
            }
            this.moveTo(targetCoords[0], targetCoords[1]);
            this.energy++;
            for (var i in this.targetArr[ti]) {
                var target = this.targetArr[ti][i];
                if (target.x == this.x && target.y == this.y) {
                    this.targetArr.splice(i, 1);
                    return true;
                }
            }
        }
        return false;
    }
}