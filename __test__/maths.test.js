import { sumar, restar, multiplicar, dividir } from '../maths';

describe("Calculos matemáticos", () => {
  test("Prueba de sumar", () => {
    expect(sumar(1,1)).toBe(2);
  });
  test("Prueba de multiplicar", () => {
    expect(multiplicar(2,2)).toBe(4);
  });
  test("Prueba de restar", () => {
    expect(restar(5,2)).toBe(3);
  });
  test("Prueba de dividir", () => {
    expect(dividir(10,2)).toBe(5);
  });
})