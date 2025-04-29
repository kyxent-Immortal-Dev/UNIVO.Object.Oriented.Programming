# CRUD con Express y MongoDB

Este proyecto implementa un CRUD básico con Express y MongoDB basado en la Práctica 10 de MongoDB en JS.

## Requisitos previos

- Node.js (v14 o superior)
- MongoDB (instalado y ejecutándose en localhost:27017) o bien va en el atlas

## Instalación

1. Clona este repositorio
2. Instala las dependencias:

```bash
npm install
```

3. Inicia MongoDB en tu sistema
4. Ejecuta la aplicación:

```bash
npm start
```

Para desarrollo con recarga automática:

```bash
npm run dev
```

## Endpoints de la API

### Clientes

- **POST /clientes** - Crear un cliente (InsertOne)
  - Crea automáticamente un cliente con tus datos personales
  
- **GET /clientes** - Obtener todos los clientes (Búsqueda)

- **GET /clientes/:nombre** - Obtener cliente por nombre (Búsqueda por parámetro)
  - Ejemplo: `/clientes/Ezequiel%20Campos`

- **DELETE /clientes/:nombre** - Eliminar un cliente (DeleteOne)
  - Ejemplo: `/clientes/Ezequiel%20Campos`

### Productos

- **POST /productos/batch** - Crear múltiples productos (InsertMany)
  - Crea automáticamente 3 productos: Camisa, Taza y Gorra

- **GET /productos/precio-mayor/:valor** - Buscar productos con precio mayor al especificado
  - Ejemplo: `/productos/precio-mayor/10`

- **PUT /productos/:nombre** - Actualizar el precio de un producto (UpdateOne)
  - Ejemplo: `/productos/Camisa`
  - Body: `{ "precio": 16.99 }`

- **PUT /productos/descuento/:precioMinimo** - Aplicar descuento a productos con precio menor al especificado (UpdateMany)
  - Ejemplo: `/productos/descuento/10`

- **DELETE /productos/descuento** - Eliminar todos los productos con descuento (DeleteMany)

## Ejemplos de uso con cURL

### Crear un cliente
```bash
curl -X POST http://localhost:3000/clientes
```

### Crear productos
```bash
curl -X POST http://localhost:3000/productos/batch
```

### Obtener productos con precio mayor a 10
```bash
curl -X GET http://localhost:3000/productos/precio-mayor/10
```

### Actualizar precio de un producto
```bash
curl -X PUT -H "Content-Type: application/json" -d '{"precio": 16.99}' http://localhost:3000/productos/Camisa
```

### Aplicar descuento a productos con precio menor a 10
```bash
curl -X PUT http://localhost:3000/productos/descuento/10
```

### Eliminar un cliente
```bash
curl -X DELETE http://localhost:3000/clientes/Ezequiel%20Campos
```