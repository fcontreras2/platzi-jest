import { getCharacter } from '../snapshot';
import rick from '../rick.json';
import { getDataFromApi } from '../promise';

describe("Es hora de las instantaneas", () => {
  test("Snapshot", () => {
    expect(getCharacter(rick)).toMatchSnapshot();
  })

  test("Siempre fallará instantanea", () => {
    const user = {
      createAt: new Date(),
      id: Math.floor(Math.random()* 20)
    }

    expect(user).toMatchSnapshot({
      createAt: expect.any(Date),
      id: expect.any(Number),
    });
  })

  test("Permitimos o tenemos una excepción", () => {
    const user = {
      id: Math.floor(Math.random()* 20),
      name: "Oscar Barajas",
    }

    expect(user).toMatchSnapshot({
      id: expect.any(Number),
    })
  });
})
