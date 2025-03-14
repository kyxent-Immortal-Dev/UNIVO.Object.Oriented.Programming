
// const volador = {
    // is a bag practice create class with this method
    
//     volar(){
//         return `I am ${this.nombre}`
//     }
// }


// this a best practice for create a abstract class
class Flying {

    fly(){
        return `${this.name} are flying`
    }

}


class Swiming {

    swim () {

        return `${this.name} are swiming`
    }

}


class Presentation {

    presentation(){
        return `Hi i am ${this.name}`
    }

}


class Invisible {

    invisible(){

        return `${this.name} powerup on invisible`
    }
}


class SuperForce {

    force(){
        return `${this.name} powerup on super force`
    }

}

module.exports = {
    Flying,
    Swiming,
    Presentation,
    Invisible,
    SuperForce

}
