const factorial = require('../factorial');

test('Factorial de 1 es 1', () => {
  const resultado = factorial(1);
  expect(resultado).toBe(1);
});

test('Factorial de 3 es 6', () => {
  const resultado = factorial(3);
  expect(resultado).toBe(6);
});

test('Factorial de 4 es 24', () => {
  const resultado = factorial(4);
  expect(resultado).toBe(24);
});

test('Factorial de número negativo arroja un error', () => {
  expect(() => factorial(-1)).toThrow('El factorial solo está definido para números no negativos.');
});