

module.exports = class PersonFactory {

    constructor(name, age){
        this.name = name,
        this.age  = age
    }

    greet(){
	return `Hi, I am ${this.name} my age is ${this.age}`
    }

}