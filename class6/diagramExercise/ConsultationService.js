const HealingInterface = require("./HealingInterface");
const InyectionInterface = require("./InyectionInterface");
const PatientAnimal = require("./PatientAnimal");
const RevisionInterface = require("./RevisionInterface");





class ConsultationService extends PatientAnimal {


    constructor(id, name, age, color ){

        super(id, name, age, color);
        this.healing   = new HealingInterface();
        this.revision  = new RevisionInterface();
        this.inyection = new InyectionInterface();
    }

    healingAnimal(){
        return this.healing.healing.call(this)
    }

    revisionAnimal(){
        return this.revision.revision.call(this)
    }

    inyectionAnimal(){
        return this.inyection.vaccinate.call(this)
    }

}


const consultation = new ConsultationService("12003044934432", "Rocky", 2, "Bicolor")

console.log(consultation.showInformation());

console.log(consultation.healingAnimal());
console.log(consultation.revisionAnimal());
console.log(consultation.inyectionAnimal());
