


class Calculator {

    static sum (num1, num2){

        return num1 + num2

    }

    static rest (num1, num2){

        return num1 - num2

    }

    static mult (num1, num2){

        return num1 * num2

    }

    static division (num1, num2){

        if(num1 === 0 || num2 === 0) throw new Error("Cannot division by zero")

        return num1 / num2

    }

}

console.log(Calculator.sum(10,10));

console.log(Calculator.rest(10,2));


console.log(Calculator.mult(20, 3));


console.log(Calculator.division(15, 3));
