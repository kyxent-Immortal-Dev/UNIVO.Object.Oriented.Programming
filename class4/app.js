

class Person {


    constructor(name, lastname, age) {
        this._name = name;
        this._lastname = lastname;
        this._age = age;
    }


    get name() {
        return this._name;
    }

    set name(name) {

        (!name || name.length < 3) ? console.log('Name is too short') : this._name = name;
            
        
    }

    
    get age() {
        return this._age;
    }
    
    set age(newAge){
        (newAge < 0 ) ? console.log('Age cannot be negative') : this._age = newAge;
        (newAge < 18 ) ? console.log('You not have 18 years') : this._age = newAge;
        (newAge > 80 ) ? console.log('You have hight age') : this._age = newAge;
    }
    
    mostrar(){
        return `Hi my name is ${this._name} ${this._lastname} `;
    }
}


const person = new Person('John', 'Doe', 10);
console.log(person.name);


person.name = 'Jane';

console.log(person.name);

person.mostrar();

person.age = 10;


console.log(`${person.mostrar()} and I am ${person.age} years old`);