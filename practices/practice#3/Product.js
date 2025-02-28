


class Product {

    #name
    #stock
    #price
    #description


    constructor(name, stock, price, description){
        this.#name        = name,
        this.#stock       = stock,
        this.#price      = price,
        this.#description = description
    }

    get priceProduct () {
        return this.#price
    }


    set priceProduct (newPrice) {
        if(newPrice <= 0) throw new Error("the price should to be greater than 0")
        this.#price = newPrice
    }

}


const product = new Product("Apple", 20, 1.99, "Is a fruit")

console.log(product.priceProduct);

product.priceProduct = 3.50

console.log(product.priceProduct);
