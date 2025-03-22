class CuentaBancaria {
    #saldo;
    
    constructor(nombre, saldoInicial) {
      this.nombre = nombre;
      this.#saldo = saldoInicial; 
    }
    
    depositar(monto) {
      if (monto > 0) {
        this.#saldo += monto;
        console.log(`Depósito exitoso. Nuevo saldo: ${this.#saldo}`);
      } else {
        console.log("El monto debe ser mayor a 0");
      }
    }
    
    obtenerSaldo() {
      return `Saldo disponible: ${this.#saldo}`;
    }
  }
  
  
  const cuenta1 = new CuentaBancaria("Juan Pérez", 1000);
  console.log(cuenta1.obtenerSaldo());
  cuenta1.depositar(500);
  console.log(cuenta1.obtenerSaldo());