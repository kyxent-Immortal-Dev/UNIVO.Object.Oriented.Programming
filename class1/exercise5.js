

class Automovil {

    constructor(marca, modelo, color){
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.encendido = false;
        console.log('Se ha creado el automovil ' + this.marca + ' ' + this.modelo + ' de color ' + this.color);
    }

    encender(){
        if(this.encendido){
            console.log('El auto ya está encendido');
        } else {
            this.encendido = true;
            console.log(`El auto ${this.marca} ${this.modelo} se ha encendido`);
        }
    }

    apagar(){
        if(this.encendido){
            this.encendido = false;
            console.log(`El auto ${this.marca} ${this.modelo} se ha apagado`);
        } else {
            console.log('El auto ya está apagado');
        }
    }
}


const auto = new Automovil('Ford', 'Fiesta', 'Rojo');
auto.encender();
auto.apagar();