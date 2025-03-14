

module.exports = class HeroService {

    constructor(name, age, color, race){
        this.name  = name;
        this.age   = age;
        this.color = color;
        this.race  = race;
    }

    walk(){
        return `${this.name} are walk`
    }

}