const MetodoPago = require('./MetodoPago');

class PagoPaypal extends MetodoPago {
  pagar(pedido) {
    console.log(`✅ Pago con PayPal: $${pedido.monto} para ${pedido.cliente.nombre}`);
  }
}

module.exports = { PagoPaypal };