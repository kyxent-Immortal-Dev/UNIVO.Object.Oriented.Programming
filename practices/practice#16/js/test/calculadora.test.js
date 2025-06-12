const Calculadora = require("../src/calculadora");

describe("Pruebas de la Calculadora", () => {
  test("Suma: 2 + 3 = 5", () => {
    expect(Calculadora.sumar(2, 3)).toBe(5);
  });

  test("Resta: 10 - 4 = 6", () => {
    expect(Calculadora.restar(10, 4)).toBe(6);
  });

  test("Multiplicación: 3 * 4 = 12", () => {
    expect(Calculadora.multiplicar(3, 4)).toBe(12);
  });

  test("División: 8 / 2 = 4", () => {
    expect(Calculadora.dividir(8, 2)).toBe(4);
  });

  test("División entre 0 lanza error", () => {
    expect(() => Calculadora.dividir(5, 0)).toThrow("No se puede dividir entre 0");
  });
});
