


class Product {

    constructor(
        id, 
        product, 
        code, 
        date_register,
        price
    ){

        this.id = id
        this.product = product
        this.code = code
        this.date_register = date_register
        this.price = price
    }


    register(){




        const productProcessDiscount = {
            id : this.id,
            product : this.product,
            code : this.code,
            date: this.date_register,
            price : this.price+1

        }

        const productProcessAument = {
            id : this.id,
            product : this.product,
            code : this.code,
            date: this.date_register,
            price : this.price

        }

        console.log(productProcessAument);
        console.log(productProcessDiscount);
        
        
        
    }


}


const newProduct = new Product("18958", "Pan", "102DSOS", "2025", 3)


newProduct.register()