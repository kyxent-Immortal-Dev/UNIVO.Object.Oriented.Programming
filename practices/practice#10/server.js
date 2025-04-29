const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const bodyParser = require('body-parser');
require("dotenv/config")

const app = express();
const port = 3000;
const uri = process.env.MONGO;
const dbName = "tiendaDB";

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Conexión a MongoDB
async function connectToMongo() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log("Conectado exitosamente a MongoDB");
    return client.db(dbName);
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error);
    process.exit(1);
  }
}

let db;
connectToMongo().then(database => {
  db = database;
});

// Rutas para clientes
// 1. InsertOne - Crear un cliente
app.post('/clientes', async (req, res) => {
  try {
    const cliente = {
      nombre: "Ezequiel Campos",
      correo: "ezequielcampos@gmail.com",
      edad: 21
    };
    
    const result = await db.collection('clientes').insertOne(cliente);
    res.status(201).json({
      message: "Cliente añadido correctamente",
      insertedId: result.insertedId,
      cliente
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 2. InsertMany - Crear múltiples productos
app.post('/productos/batch', async (req, res) => {
  try {
    const productos = [
      { nombre: "Camisa", precio: 15.99 },
      { nombre: "Taza", precio: 7.5 },
      { nombre: "Gorra", precio: 9.99 }
    ];
    
    const result = await db.collection('productos').insertMany(productos);
    res.status(201).json({
      message: "Productos añadidos correctamente",
      insertedIds: result.insertedIds,
      count: result.insertedCount
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 3. Búsqueda - Obtener todos los clientes
app.get('/clientes', async (req, res) => {
  try {
    const clientes = await db.collection('clientes').find().toArray();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 4. Búsqueda por parámetro - Obtener cliente por nombre
app.get('/clientes/:nombre', async (req, res) => {
  try {
    const cliente = await db.collection('clientes').find({ 
      nombre: req.params.nombre 
    }).toArray();
    
    if (cliente.length === 0) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 5. Búsqueda de productos con precios mayor a 10
app.get('/productos/precio-mayor/:valor', async (req, res) => {
  try {
    const valor = parseFloat(req.params.valor);
    const productos = await db.collection('productos').find({ 
      precio: { $gt: valor } 
    }).toArray();
    
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 6. UpdateOne - Actualizar un producto
app.put('/productos/:nombre', async (req, res) => {
  try {
    const { precio } = req.body;
    const result = await db.collection('productos').updateOne(
      { nombre: req.params.nombre },
      { $set: { precio: parseFloat(precio) } }
    );
    
    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    
    res.json({
      message: "Producto actualizado correctamente",
      modifiedCount: result.modifiedCount
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 7. UpdateMany - Actualizar múltiples productos
app.put('/productos/descuento/:precioMinimo', async (req, res) => {
  try {
    const precioMinimo = parseFloat(req.params.precioMinimo);
    const result = await db.collection('productos').updateMany(
      { precio: { $lt: precioMinimo } },
      { $set: { descuento: true } }
    );
    
    res.json({
      message: "Productos actualizados correctamente",
      modifiedCount: result.modifiedCount
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 8. DeleteOne - Eliminar un cliente
app.delete('/clientes/:nombre', async (req, res) => {
  try {
    const result = await db.collection('clientes').deleteOne({ 
      nombre: req.params.nombre 
    });
    
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }
    
    res.json({
      message: "Cliente eliminado correctamente",
      deletedCount: result.deletedCount
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 9. DeleteMany - Eliminar múltiples productos
app.delete('/productos/descuento', async (req, res) => {
  try {
    const result = await db.collection('productos').deleteMany({ 
      descuento: true 
    });
    
    res.json({
      message: "Productos eliminados correctamente",
      deletedCount: result.deletedCount
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});