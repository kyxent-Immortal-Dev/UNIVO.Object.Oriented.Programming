const HeroService = require("./HeroService");
const { SuperForce, Invisible, Flying, Swiming, Presentation } = require("./InheritanceService");



class BatmanFactory extends HeroService{


    constructor(name, age, color, race){
        super(name, age, color, race);

        this.superForce        = new SuperForce();
        this.invisiblePower    = new Invisible();
        this.flying            = new Flying();
        this.swiming           = new Swiming();
        this.superPresentation = new Presentation();
    }

    presentation(){
        return this.superPresentation.presentation.call(this)
    }

    superforce(){
        return this.superForce.force.call(this)
    }

    invisible(){
        return this.invisiblePower.invisible.call(this)
    }

    swim(){

        return this.swiming.swim.call(this)
    }
    
    fly(){
        return this.flying.fly.call(this)
    }

}


const batman = new BatmanFactory("Batman", 30, "white", "Human")

console.log(batman.presentation());
console.log(batman.superforce());
console.log(batman.swim());
console.log(batman.fly());
console.log(batman.invisible());
console.log(batman.walk());
