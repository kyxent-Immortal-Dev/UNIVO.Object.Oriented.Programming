const Animal = require("./AnimalFactory");
const { Flying, Swiming } = require("./InheritanceService");



class DuckFactory extends Animal {

    constructor(name, age, color , race){

        super(name, age, color, race);
        //composition method for multi inheritance, this method using dependency inyection
        this.flying  = new Flying();
        this.swiming = new Swiming();
    }

    fly(){
        return this.flying.fly.call(this);
    }
    swim(){

        return this.flying.fly.call(this);
    }

}

const duck = new DuckFactory("mister", 2, "white", "Mallard")


console.log(duck.fly());
console.log(duck.eat());
console.log(duck.swim());


