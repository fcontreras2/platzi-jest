import { getDataFromApi } from '../promise';

describe("Prueba de la promise", () => {
  test("Prueba de API de Rick and Morty", async (done) => {
    const url = 'https://rickandmortyapi.com/api/character';
    const response = await getDataFromApi(url);
    expect(response.results.length).toBeGreaterThan(16);
    done();
  });

  test("Resuelve una Hola!", () => {
    return expect(Promise.resolve("Hola!")).resolves.toBe("Hola!");
  });

  test("Rechaza con un error", () => {
    return expect(Promise.reject('Error')).rejects.toBe('Error');
  });

  test("Realizar una petición a una api con error", async() => {
    const apiError = "http://httpstat.us/500";
    const response = getDataFromApi(apiError);

    return await expect(response).rejects.toEqual(new Error("Request failed with status code 500"));
  });
})