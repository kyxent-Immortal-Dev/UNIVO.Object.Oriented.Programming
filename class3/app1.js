
class People {

    constructor(name, lastname){
        this.name = name,
        this.lastname = lastname
    }


    printUser(age){
        return `Hi my name is ${this.name}, ${this.lastname} , ${age}`
    }

    HiUser(name){

        return `Hi ${name} welcome to my app`
    }
    
}




const newPeople = new People("Ezequiel", "Campos")


console.log(newPeople.printUser(20));
console.log(newPeople.HiUser("Humberto Campos"));


