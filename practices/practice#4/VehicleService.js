

class VehicleService {

    #model
    #year
    #color
    #brand

    constructor(
        model,
        year,
        color,
        brand
    ){
        this.#model = model,
        this.#year  = year,
        this.#color = color,
        this.#brand = brand
    }


    get vehicle(){
        return {
            model : this.#model,
            year  : this.#year,
            color : this.#color,
            brand : this.#brand,

        }
    }


    set vehicle (data = {           
        model : this.#model,
        year  : this.#year,
        color : this.#color,
        brand : this.#brand,
    }){

        const {model, year , color, brand} = data

        {
            this.#model = model,
            this.#year  = year,
            this.#color = color,
            this.#brand = brand
        }



    }
    

}


const vehicle = new VehicleService("GTR", 2002, "dark blue", "BMW")


console.log(vehicle.vehicle);

vehicle.vehicle = {
    model : "SUPRA",
    year  : "2005",
    color : "Dark Red",
    brand : "Toyota",   
}

const {model, year, color, brand} = vehicle.vehicle


console.log(`\nThis is my car:\nmodel:${model}\nyear:${year}\ncolor:${color}\nbrand:${brand}\n`);
