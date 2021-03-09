export const callbackHell = (callback) => {
  callback("Hola javascripters");
};

export function AsincFunc (callback) {
  return setTimeout(callback('Hola desarrolladores!'), 3000);
}