

class Archivo {

    constructor(nombre){
        this.nombre = nombre;
        console.log('Se ha abierto el archivo ' + this.nombre);
    }

    cerrar(){
        console.log('Se ha cerrado el archivo ' + this.nombre);
    }
}


const archivo = new Archivo('documento.txt');

archivo.cerrar();