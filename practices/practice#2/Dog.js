const Animal = require("./Animal");




class Dog extends Animal {

    constructor(
        name,
        species,
        color
    ){
        super(
            name, 
            species, 
            color
        )
    }

    getName(){
        return super.name;
    }



}

let dog = new Dog("Envangesin", "german shepherd", "bicolor")

console.log(dog.getName());
