const MetodoPago = require('./MetodoPago');

class PagoTarjeta extends MetodoPago {
  pagar(pedido) {
    console.log(`✅ Pago con tarjeta: $${pedido.monto} para ${pedido.cliente.nombre}`);
  }
}

module.exports = { PagoTarjeta };