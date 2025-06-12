// ========================================
// MAL DISEÑO: Baja cohesión y alto acoplamiento
// ========================================

console.log("=== MAL DISEÑO ===");

class TiendaMalDiseño {
    constructor() {
        // Maneja inventario
        this.productos = [];
        this.stock = {};
        
        // Maneja clientes
        this.clientes = [];
        
        // Maneja ventas
        this.ventas = [];
        this.total = 0;
        
        // Maneja notificaciones
        this.emailConfig = {
            servidor: "smtp.gmail.com",
            puerto: 587
        };
    }
    
    // Métodos de inventario mezclados con todo lo demás
    agregarProducto(producto, cantidad) {
        this.productos.push(producto);
        this.stock[producto.id] = cantidad;
        // Directamente maneja notificaciones aquí
        this.enviarEmailInventario(producto);
    }
    
    // Métodos de cliente
    registrarCliente(cliente) {
        this.clientes.push(cliente);
        // Directamente calcula descuentos
        if (this.clientes.length > 100) {
            cliente.descuento = 0.1;
        }
        // Directamente envía email
        this.enviarEmailBienvenida(cliente);
    }
    
    // Métodos de venta que dependen de todo
    realizarVenta(clienteId, productoId, cantidad) {
        const cliente = this.clientes.find(c => c.id === clienteId);
        const producto = this.productos.find(p => p.id === productoId);
        
        if (this.stock[productoId] >= cantidad) {
            this.stock[productoId] -= cantidad;
            const subtotal = producto.precio * cantidad;
            const descuento = cliente.descuento || 0;
            const total = subtotal * (1 - descuento);
            
            this.ventas.push({
                cliente: cliente.nombre,
                producto: producto.nombre,
                cantidad,
                total
            });
            
            this.total += total;
            
            // Directamente maneja email y stock
            this.enviarEmailVenta(cliente, producto, total);
            this.verificarStockBajo(productoId);
        }
    }
    
    // Métodos de notificación mezclados
    enviarEmailInventario(producto) {
        console.log(`📧 Enviando email: Nuevo producto ${producto.nombre} agregado`);
    }
    
    enviarEmailBienvenida(cliente) {
        console.log(`📧 Enviando email de bienvenida a ${cliente.nombre}`);
    }
    
    enviarEmailVenta(cliente, producto, total) {
        console.log(`📧 Enviando factura a ${cliente.email}: $${total}`);
    }
    
    verificarStockBajo(productoId) {
        if (this.stock[productoId] < 5) {
            console.log(`⚠️ Stock bajo para producto ${productoId}`);
        }
    }
    
    // Método que hace demasiadas cosas
    generarReporte() {
        console.log("=== REPORTE GENERAL ===");
        console.log(`Total de productos: ${this.productos.length}`);
        console.log(`Total de clientes: ${this.clientes.length}`);
        console.log(`Total de ventas: ${this.ventas.length}`);
        console.log(`Ingresos totales: $${this.total}`);
        
        // También maneja notificaciones
        this.enviarEmailReporte();
    }
    
    enviarEmailReporte() {
        console.log("📧 Enviando reporte por email a administrador");
    }
}

// Ejemplo de uso del mal diseño
const tiendaMala = new TiendaMalDiseño();

tiendaMala.agregarProducto({ id: 1, nombre: "Laptop", precio: 1000 }, 10);
tiendaMala.registrarCliente({ id: 1, nombre: "Juan", email: "juan@email.com" });
tiendaMala.realizarVenta(1, 1, 2);
tiendaMala.generarReporte();

console.log("\n" + "=".repeat(50) + "\n");

// ========================================
// BUEN DISEÑO: Alta cohesión y bajo acoplamiento
// ========================================

console.log("=== BUEN DISEÑO ===");

// Clase con alta cohesión - solo maneja inventario
class Inventario {
    constructor() {
        this.productos = new Map();
        this.stock = new Map();
    }
    
    agregarProducto(producto, cantidad) {
        this.productos.set(producto.id, producto);
        this.stock.set(producto.id, cantidad);
        return producto;
    }
    
    obtenerProducto(id) {
        return this.productos.get(id);
    }
    
    verificarStock(id) {
        return this.stock.get(id) || 0;
    }
    
    reducirStock(id, cantidad) {
        const stockActual = this.stock.get(id) || 0;
        if (stockActual >= cantidad) {
            this.stock.set(id, stockActual - cantidad);
            return true;
        }
        return false;
    }
    
    esStockBajo(id, limite = 5) {
        return this.verificarStock(id) < limite;
    }
    
    obtenerProductos() {
        return Array.from(this.productos.values());
    }
}

// Clase con alta cohesión - solo maneja clientes
class GestorClientes {
    constructor() {
        this.clientes = new Map();
    }
    
    registrarCliente(cliente) {
        this.clientes.set(cliente.id, {
            ...cliente,
            fechaRegistro: new Date(),
            descuento: this.calcularDescuentoInicial()
        });
        return this.clientes.get(cliente.id);
    }
    
    obtenerCliente(id) {
        return this.clientes.get(id);
    }
    
    calcularDescuentoInicial() {
        return this.clientes.size > 100 ? 0.1 : 0;
    }
    
    obtenerTotalClientes() {
        return this.clientes.size;
    }
}

// Clase con alta cohesión - solo maneja notificaciones
class Notificador {
    constructor() {
        this.configuracion = {
            servidor: "smtp.gmail.com",
            puerto: 587
        };
    }
    
    enviarBienvenida(cliente) {
        console.log(`📧 Bienvenida enviada a ${cliente.nombre} (${cliente.email})`);
    }
    
    enviarFactura(cliente, detalles) {
        console.log(`📧 Factura enviada a ${cliente.email}: $${detalles.total}`);
    }
    
    enviarAlertaStock(producto) {
        console.log(`⚠️ Alerta: Stock bajo para ${producto.nombre}`);
    }
    
    enviarReporte(datos) {
        console.log(`📧 Reporte enviado - Productos: ${datos.productos}, Clientes: ${datos.clientes}, Ventas: $${datos.ingresos}`);
    }
    
    enviarNuevoProducto(producto) {
        console.log(`📧 Notificación: Nuevo producto disponible - ${producto.nombre}`);
    }
}

// Clase con alta cohesión - solo maneja ventas
class GestorVentas {
    constructor() {
        this.ventas = [];
        this.ingresoTotal = 0;
    }
    
    realizarVenta(cliente, producto, cantidad) {
        const subtotal = producto.precio * cantidad;
        const descuento = cliente.descuento || 0;
        const total = subtotal * (1 - descuento);
        
        const venta = {
            id: this.ventas.length + 1,
            clienteId: cliente.id,
            productoId: producto.id,
            cantidad,
            subtotal,
            descuento,
            total,
            fecha: new Date()
        };
        
        this.ventas.push(venta);
        this.ingresoTotal += total;
        
        return venta;
    }
    
    obtenerVentas() {
        return this.ventas;
    }
    
    obtenerIngresoTotal() {
        return this.ingresoTotal;
    }
    
    obtenerTotalVentas() {
        return this.ventas.length;
    }
}

// Clase coordinadora con bajo acoplamiento
class Tienda {
    constructor() {
        this.inventario = new Inventario();
        this.gestorClientes = new GestorClientes();
        this.notificador = new Notificador();
        this.gestorVentas = new GestorVentas();
    }
    
    agregarProducto(producto, cantidad) {
        const productoAgregado = this.inventario.agregarProducto(producto, cantidad);
        this.notificador.enviarNuevoProducto(productoAgregado);
        return productoAgregado;
    }
    
    registrarCliente(cliente) {
        const clienteRegistrado = this.gestorClientes.registrarCliente(cliente);
        this.notificador.enviarBienvenida(clienteRegistrado);
        return clienteRegistrado;
    }
    
    realizarVenta(clienteId, productoId, cantidad) {
        const cliente = this.gestorClientes.obtenerCliente(clienteId);
        const producto = this.inventario.obtenerProducto(productoId);
        
        if (!cliente || !producto) {
            throw new Error("Cliente o producto no encontrado");
        }
        
        if (!this.inventario.reducirStock(productoId, cantidad)) {
            throw new Error("Stock insuficiente");
        }
        
        const venta = this.gestorVentas.realizarVenta(cliente, producto, cantidad);
        
        // Notificaciones independientes
        this.notificador.enviarFactura(cliente, venta);
        
        if (this.inventario.esStockBajo(productoId)) {
            this.notificador.enviarAlertaStock(producto);
        }
        
        return venta;
    }
    
    generarReporte() {
        const datos = {
            productos: this.inventario.obtenerProductos().length,
            clientes: this.gestorClientes.obtenerTotalClientes(),
            ventas: this.gestorVentas.obtenerTotalVentas(),
            ingresos: this.gestorVentas.obtenerIngresoTotal()
        };
        
        console.log("=== REPORTE DETALLADO ===");
        console.log(`📊 Total de productos: ${datos.productos}`);
        console.log(`👥 Total de clientes: ${datos.clientes}`);
        console.log(`💰 Total de ventas: ${datos.ventas}`);
        console.log(`💵 Ingresos totales: $${datos.ingresos}`);
        
        this.notificador.enviarReporte(datos);
        
        return datos;
    }
}

// Ejemplo de uso del buen diseño
const tiendaBuena = new Tienda();

console.log("--- Agregando productos ---");
tiendaBuena.agregarProducto({ id: 1, nombre: "Laptop Gaming", precio: 1500 }, 8);
tiendaBuena.agregarProducto({ id: 2, nombre: "Mouse Gamer", precio: 50 }, 3);

console.log("\n--- Registrando clientes ---");
tiendaBuena.registrarCliente({ id: 1, nombre: "María García", email: "maria@email.com" });
tiendaBuena.registrarCliente({ id: 2, nombre: "Carlos López", email: "carlos@email.com" });

console.log("\n--- Realizando ventas ---");
try {
    tiendaBuena.realizarVenta(1, 1, 1);
    tiendaBuena.realizarVenta(2, 2, 2); // Esto debería generar alerta de stock bajo
    tiendaBuena.realizarVenta(1, 1, 2);
} catch (error) {
    console.log(`❌ Error en venta: ${error.message}`);
}

console.log("\n--- Generando reporte ---");
tiendaBuena.generarReporte();

console.log("\n" + "=".repeat(50));
console.log("🎯 COMPARACIÓN:");
console.log("❌ Mal diseño: Una clase hace todo, difícil de mantener");
console.log("✅ Buen diseño: Cada clase tiene una responsabilidad específica");
console.log("✅ Fácil de testear, mantener y extender");