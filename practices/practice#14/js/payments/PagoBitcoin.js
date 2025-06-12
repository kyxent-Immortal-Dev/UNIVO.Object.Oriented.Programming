const MetodoPago = require('./MetodoPago');

class PagoBitcoin extends MetodoPago {
  pagar(pedido) {
    console.log(`✅ Pago con Bitcoin: $${pedido.monto} para ${pedido.cliente.nombre}`);
  }
}


module.exports = { PagoBitcoin };