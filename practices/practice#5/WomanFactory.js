const PersonFactory = require("./PersonFactory");




class WomanFactory extends PersonFactory {

    constructor(name, age, sizeShoe, colorEyes, hight){
        super(name, age)
        this.sizeShoe  = sizeShoe
        this.colorEyes = colorEyes
        this.hight     = hight

    }


    greet(){
        return `Hi I am ${this.name} I have ${this.age} years age my size shoe is ${this.sizeShoe} my color eyes is ${this.colorEyes} my stature is ${this.hight}`
    }

}


const woman = new WomanFactory("Chelsea", "20", "38", "coffee", "1.57")

console.log(woman.greet());
