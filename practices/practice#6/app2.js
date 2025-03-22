class Usuario {
    #claveSecreta;
    
    constructor(nombre, clave) {
      this.nombre = nombre;
      this.#claveSecreta = clave;
    }
    
    #verificarClave(clave) {
      return this.#claveSecreta === clave;
    }
    
    autenticar(clave) {
      if (this.#verificarClave(clave)) {
        console.log("Acceso concedido");
      } else {
        console.log("Acceso denegado");
      }
    }
  }
  
  const user1 = new Usuario("Carlos Pérez", "1234");
  user1.autenticar("1234"); // Acceso concedido
  user1.autenticar("0000"); // Acceso denegado