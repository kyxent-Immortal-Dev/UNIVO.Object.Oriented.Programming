const { Cliente } = require("./models/Cliente.js");
const { Pedido } = require("./models/Pedido.js");
const { PagoTarjeta } = require("./payments/PagoTarjeta.js");
const { PagoPaypal } = require("./payments/PagoPaypal.js");
const { PagoBitcoin } = require("./payments/PagoBitcoin.js");
const { ProcesadorPagos } = require("./services/ProcesadorPagos.js");

// Crear cliente y pedido
const cliente = new Cliente("Irving", "irving@mail.com");
const pedido = new Pedido(cliente, 100);

// Elegir método de pago
const pagoTarjeta = new PagoTarjeta();
const pagoPaypal = new PagoPaypal();
const pagoBitcoin = new PagoBitcoin(); 

// Procesar pago
new ProcesadorPagos(pagoTarjeta).ejecutar(pedido);
new ProcesadorPagos(pagoPaypal).ejecutar(pedido);
new ProcesadorPagos(pagoBitcoin).ejecutar(pedido);
