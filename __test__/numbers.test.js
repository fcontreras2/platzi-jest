import { numbers } from '../numbers';

describe("Comparación de números", () => {
  const value = numbers(2,2);

  test("Mayor que", () => {
    expect(value).toBeGreaterThan(3);
  })

  test("Mayor o igual que", () => {
    expect(value).toBeGreaterThanOrEqual(4);
  });

  test("Menor que", () => {
    expect(value).toBeLessThan(5);
  });

  test("Menor o igual que", () => {
    expect(value).toBeLessThanOrEqual(4.5);
  });

  test("Número flotantes", () => {
    expect(numbers(0.2, 0.2)).toBeCloseTo(0.4);
  });
});