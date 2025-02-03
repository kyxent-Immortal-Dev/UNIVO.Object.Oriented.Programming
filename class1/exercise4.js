

class Persona {

    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
        console.log('Se ha creado la persona ' + this.nombre + ' con ' + this.edad + ' años');
    }

    get edad(){
        return this._edad;
    }

    set edad(value){
        if(value <= 0){
            throw new Error('La edad no puede ser negativa o igual a cero');
        }
        this._edad = value;
    }
}

const persona = new Persona('Ezequiel', 21);
console.log(persona.edad);
persona.edad = 22;
console.log(persona.edad);