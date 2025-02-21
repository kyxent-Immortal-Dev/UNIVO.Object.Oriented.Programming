const AgeCalculator = require("./AgeCalculator");
const Person = require("./People");
const Product = require("./Product");
const { v4: uuidv4 } = require('uuid');


try {

    const person = new Person(
        uuidv4(),
        "John Smith",
        "12345678",
        "M",
        "Sales"
    );
    console.log(person.showUserInformation());

    const product = new Product(
        uuidv4(),
        "Laptop",
        999.99,
        10
    );
    console.log(product.showProductInformation());
    console.log(product.addStock(5));
    console.log(product.purchase(3));


    const ageCalc = new AgeCalculator("1990-05-15");
    console.log(ageCalc.showAge());

} catch (error) {
    console.error("Error:", error.message);
}