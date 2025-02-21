const { v4: uuidv4 } = require('uuid');

module.exports = class Product {
    constructor(id, name, price, stock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

    get id() {
        return this._id;
    }

    set id(newId) {
        if (typeof newId !== "string" || newId.length !== 36) {
            throw new Error("Invalid ID");
        }
        this._id = newId;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        if (typeof newName !== "string" || newName.trim().length === 0) {
            throw new Error("Product name is required");
        }
        this._name = newName;
    }

    get price() {
        return this._price;
    }

    set price(newPrice) {
        if (typeof newPrice !== "number" || newPrice <= 0) {
            throw new Error("Price must be a positive number");
        }
        this._price = newPrice;
    }

    get stock() {
        return this._stock;
    }

    set stock(newStock) {
        if (typeof newStock !== "number" || newStock < 0) {
            throw new Error("Stock cannot be negative");
        }
        this._stock = newStock;
    }

    addStock(quantity) {
        if (typeof quantity !== "number" || quantity <= 0) {
            throw new Error("Quantity to add must be a positive number");
        }
        this.stock += quantity;
        return `Stock updated. New stock: ${this.stock}`;
    }

    purchase(quantity) {
        if (typeof quantity !== "number" || quantity <= 0) {
            throw new Error("Quantity to purchase must be a positive number");
        }
        if (quantity > this.stock) {
            throw new Error(`Insufficient stock. Current stock: ${this.stock}`);
        }
        this.stock -= quantity;
        return `Purchase completed. Remaining stock: ${this.stock}`;
    }

    showProductInformation() {
        return `
            ID: ${this.id}
            Product: ${this.name}
            Price: $${this.price}
            Stock: ${this.stock}
        `;
    }
}
