class ProcesadorPagos {
  constructor(metodoPago) {
    this.metodoPago = metodoPago;
  }

  ejecutar(pedido) {
    this.metodoPago.pagar(pedido);
  }
}

module.exports = { ProcesadorPagos };