import { arraysColors , arraysFruits } from '../arrays';

describe("Comprobamos si existe un elemento", () => {
  test("¿Tiene una banana?", () => {
    expect(arraysFruits()).toContain("banana");
    expect(new Set(arraysFruits())).toContain('banana');
  });

  test("¿No Tiene una banana?", () => {
    expect(arraysFruits()).not.toContain("platano");
  });

  test("Comprobar el tamaño de un arreglo", () => {
    expect(arraysFruits()).toHaveLength(6);
  })
});