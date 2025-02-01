

class Product {

    constructor(name, price) {
        this._name = name;
        this._price = price;
    }

    
    get name() {
        return this._name;
    }

    get price() {
        return `${this._price.toFixed(2)} USD`;
    }

}


const product = new Product('Samsung', 1000.99);

console.log(product.name);
console.log(product.price);