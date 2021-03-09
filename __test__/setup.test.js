// despues de cada prueba
afterEach(() => console.log("Despues de cada prueba"));
// Despues de todas las pruebas
afterAll(() => console.log("Despues de todas las pruebas"));
// Antes de cada prueba
beforeEach(() => console.log("Antes de cada prueba") ); 
// Antes de todas las pruebas
beforeAll(() => console.log("antes de todas las pruebas"));

describe("Prepara antes de ejecutar", () => {
  test("Es verdadero", () => {
    expect(true).toBeTruthy();
  })
})

