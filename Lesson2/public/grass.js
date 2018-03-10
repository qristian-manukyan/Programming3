class Grass extends KendaniEak {

    evolve(){
        this.multiply++;
        this.direction = random(this.getRandomCharacter(0));
        if(this.direction){
            var newGrass = new Grass(this.direction[0],this.direction[1],this.index);
            newGrass.parentX = this.x;
            newGrass.parentY = this.y;
            grassArr.push(newGrass);
            matrix[this.direction[1]][this.direction[0]] = this.index;
            this.multiply = 0;
        }
    }
}
