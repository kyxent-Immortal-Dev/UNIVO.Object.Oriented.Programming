


class Vehicle {

    constructor(model, brand , year){

        this.model = model,
        this.brand = brand,
        this.year  = year

    }
}


class Car extends Vehicle {

    #color
    #propietary

    constructor(model, brand, year, color , propietary){
        super(model, brand, year)
        this.#color      = color
        this.#propietary = propietary
    }


    get showCarInformation(){

        return {
            color       : this.#color,
            propietary  : this.#propietary,
            model       : this.model,
            brand       : this.brand,
            year        : this.year
        }
    }

}



const car = new Car("Dark Blue", "Ezequiel", "Supra", "Toyota", 2004)



console.log(car.showCarInformation);
