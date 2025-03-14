


module.exports = class Animal {

    constructor(name, age, color, race){
        this.name  = name;
        this.age   = age;
        this.color = color;
        this.race  = race;
    }

    eat(){
        return `${this.name} are eat`
    }

}