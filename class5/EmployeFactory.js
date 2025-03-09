

class EmployeFactory {


    constructor(name, lastname, age, position, role){
        this.name     = name;
        this.lastname = lastname;
        this.age      = age;
        this.position = position;
        this.role     = role;
    }

}


class Developer extends EmployeFactory {


    #tasks = []
    #isPermanent 


    constructor(name, lastname, age, position, role, tasks, isPermanent){

        super(name, lastname, age, position, role)
        this.#tasks       = tasks;
        this.#isPermanent = isPermanent;

    }


    get showDeveloperInformation () {

        return {
            name        : this.name,
            lastname    : this.lastname,
            age         : this.age,
            position    : this.position,
            role        : this.role,
            tasks       : this.#tasks,
            isPermanent : this.#isPermanent
        }
    }

}



const developer = new Developer(
    "Ezequiel", 
    "Campos", 
    21, 
    "Frontend Developer", 
    "Member Group frontends developers", 
    "Developer", 
    ["Design web pages with figma", 
    "create frontend apps with react", 
    true])


console.log(developer.showDeveloperInformation);
