import { TestScheduler } from "jest"

describe("Comparadores comunes", () => {
  const user = {
    name: "Freddy",
    lastname: "Contreras",
  }

  const user2 = {
    name: "Freddy",
    lastname: "Contreras",
  }

  const user3 = {
    name: "Rafael",
    lastname: "Gomez",
  }

  test('igualdad de elementos', () => {
    expect(user).toEqual(user2);
  });

  test('No son exactamente iguales', () => {
    expect(user).not.toEqual(user3);
  });

});
