

class Atacks {

    kick(){
        return "i am kicking"
    }

    jump(){
        return "I am jumping"
    }

    run(){
        return "I am running"
    }
}



class Player1 extends Atacks {
    constructor(name){
        super()
        this.name = name
    }

    kick(){
        return `the player ${this.name} kicking`;
        
    }


}



class Player2 extends Atacks {
    constructor(name){
        super()
        this.name = name
    }

    jump(){
        return `the player ${this.name} is jumping`;
        
    }


}


class Player3 extends Atacks {
    constructor(name){
        super()
        this.name = name
    }

    run(){
        return `the player ${this.name} is running`;
        
    }
}



const players = {
    player1 : new Player1("Ezequiel"),
    player2 : new Player2("Chelsea"),
    player3 : new Player3("Williams")
}


console.log(players.player1.kick());
console.log(players.player2.jump());
console.log(players.player3.run());
