import { callbackHell, AsincFunc } from '../callbacks';

describe("Probando un callback", () => {
  test("Prueba de callback", (done) => {
    function otherCallback(data) {
      expect(data).toBe("Hola javascripters");
      done();
    }

    callbackHell(otherCallback);
  });

  test('Callback timeout', (done) => {   
    function otherCallback(data) {
        expect(data).toBe('Hola desarrolladores!');
        done();
    }
    AsincFunc(otherCallback)
  });
});

