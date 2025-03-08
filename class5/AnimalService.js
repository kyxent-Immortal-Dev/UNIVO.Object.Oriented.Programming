
class Animal {

    constructor(color, type, age, race){
        this.color = color,
        this.type  = type,
        this.age   = age,
        this.race  = race
    }
}

class Dog extends Animal {

    #name
    #gender

    constructor(color, type, age, race, name, gender){
        super(color, type, age, race)
        this.#name   = name
        this.#gender = gender
    }

    get showInformation(){
        return {
            name     : this.#name,
            gender   : this.#gender,
            color    : this.color,
            type     : this.type,
            age      : this.age,
            race     : this.race,
        }
    }
}

const dog = new Dog("Rocky", "Male", "bicolor", "canine", "3 years", "Husky")

console.log(dog.showInformation);