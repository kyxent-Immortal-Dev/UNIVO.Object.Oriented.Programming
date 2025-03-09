


class StudentService {


    #name
    #lastname
    #age
    #year
    #carrer
    

    constructor(name, lastname, age, year, carrer){
        this.#name     = name,
        this.#lastname = lastname,
        this.#age      = age,
        this.#year     = year,
        this.#carrer   = carrer
    }

    get information () {


        return {
            name     : this.#name,
            lastname : this.#lastname,
            age      : this.#age,
            year     : this.#year,
            carrer   : this.#carrer,
        }
    }


    set information (data = {
        name     : this.#name,
        lastname : this.#lastname,
        age      : this.#age,
        year     : this.#year,
        carrer   : this.#carrer,
    }) {

        const {name, lastname, age, year, carrer} = data

        {
            this.#name     = name,
            this.#lastname = lastname,
            this.#age      = age,
            this.#year     = year,
            this.#carrer   = carrer
        }
    }

}


const student = new StudentService("Ezequiel", "Campos", 21, 2022, "Software enginner")


console.log(student.information);


student.information = {
    name     : "Humberto Ezequiel",
    lastname : "Zelaya Campos",
    age      : 21,
    year     : 2022,
    carrer   : "Software Enginner"
}


const {name, lastname, age, year, carrer} = student.information


console.log(`Hi my name is : ${name} ${lastname}, I have ${age} years and study ${carrer} from ${year}`);

