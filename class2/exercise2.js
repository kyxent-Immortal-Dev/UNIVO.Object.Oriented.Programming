
class CalculatorTemperature {

    static Fahrenheit = 30;

    static Celsius = 25;

    static Kelvin = 300;

    static FahrenheitToCelsius() {
        return (this.Fahrenheit - 32) * 5 / 9;
    }

    static CelsiusToFahrenheit() {
        return (this.Celsius * 9 / 5) + 32;
    }

    static KelvinToFahrenheit() {
        return (this.Kelvin - 273.15) * 9 / 5 + 32;
    }

    static KelvinToCelsius() {
        return this.Kelvin - 273.15;
    }
}

console.log(`${CalculatorTemperature.Fahrenheit}°F = ${CalculatorTemperature.FahrenheitToCelsius().toFixed(2)}°C`);

console.log(`${CalculatorTemperature.Celsius}°C = ${CalculatorTemperature.CelsiusToFahrenheit().toFixed(2)}°F`);

console.log(`${CalculatorTemperature.Kelvin}K = ${CalculatorTemperature.KelvinToFahrenheit().toFixed(2)}°F`);

console.log(`${CalculatorTemperature.Kelvin}K = ${CalculatorTemperature.KelvinToCelsius().toFixed(2)}°C`);
