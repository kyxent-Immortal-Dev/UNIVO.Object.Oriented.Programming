


module.exports = class PatientAnimal {


    constructor(id, name, age, color){
        this.id    = id;
        this.name  = name;
        this.age   = age;
        this.color = color;
    }

    showInformation(){
        return `id : ${this.id}\nname : ${this.name}\nage : ${this.age}\ncolor : ${this.color}`
    }

}