

class ImcCalculator {
    static name = "Ezequiel Campos";

    static age = 21;

    static weight = 70;

    static height = 1.72;

    static imcMen() {
        let calcHeight = this.height * this.height;
        let calcWeight = this.weight;

        let result = calcWeight / calcHeight;

        return `Hi ${this.name},\nyou're ${this.age} years old,\nyour IMC is: ${result.toFixed(1)}`;
    }
}

console.log(ImcCalculator.imcMen());
