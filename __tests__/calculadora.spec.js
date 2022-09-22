const calculadora = require("../src/calculadora.js");

test('somar 2 + 3', () => {
  //configura
  const num1 = 2;
  const num2 = 3;
  const resultadoEsperado = 5;
  //executa
  const resultadoObtido = calculadora.somarDoisNumeros;
  //valida
  console.log(resultadoObtido(4, 6));
  console.log(resultadoEsperado);
  expect(Object.is(resultadoEsperado,resultadoObtido(num1, num2))).toBe(true);
  expect(resultadoEsperado).toBe(resultadoObtido(num1, num2));
 
})