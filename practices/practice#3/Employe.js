
module.exports = class Employe {

    #fullname
    #salary
    #age
    #role


    constructor(fullname, salary, age, role){
        this.#fullname     = fullname,
        this.#salary       = salary,
        this.#age          = age,
        this.#role         = role
    }

    get userSalary(){
        return this.#salary
    }

    set userSalary(newSalary){

        this.#salary = newSalary

    }


    showInformation(){
        return `fullname ${this.#fullname}\nsalary ${this.#salary}\nage ${this.#age}\nrole ${this.#role}`
    }

}


// const employee = new Employe("Ezequiel Campos", 1200, 21, "Full stack Nodejs")

// console.log(employee.showInformation());

// console.log(employee.userSalary);

// employee.userSalary = 1700

// console.log(employee.showInformation());
