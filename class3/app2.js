const { v4:  v4 } = require('uuid');

class Product {

    constructor(
        id, 
        product, 
        code, 
        date_register,
        price
    ){

        this.id             = id
        this.product        = product
        this.code           = code
        this.date_register  = date_register
        this.price          = price
    }

    register(){

        const desc = this.price*0.20

        const descout = this.price- desc

        const aument = this.price*0.20

        const aumentPrice = this.price + aument

        const productOperator = {
            id      : this.id,
            product : this.product,
            code    : this.code,
            date    : this.date_register,
            price   : {
                aument: aumentPrice,
                discout: descout,
                originalPrice : this.price
            }

        }
        console.log(productOperator); 
    }
}

const day = new Date()

const newProduct = new Product(v4(), "apple", v4(), day, 3)

newProduct.register()


