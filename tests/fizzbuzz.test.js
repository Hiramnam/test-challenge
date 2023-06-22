const fizzBuzz = require('.tests./fizzBuzz');

test('Número divisible por 3 y 5 retorna "FizzBuzz"', () => {
  const resultado = fizzBuzz(75);
  expect(resultado).toBe('FizzBuzz');
});

test('Número divisible por 3 retorna "Fizz"', () => {
  const resultado = fizzBuzz(15);
  expect(resultado).toBe('Fizz');
});

test('Número divisible por 5 retorna "Buzz"', () => {
  const resultado = fizzBuzz(60);
  expect(resultado).toBe('Buzz');
});

test('Número no divisible por 3 ni 5 retorna el número mismo', () => {
  const resultado = fizzBuzz(9);
  expect(resultado).toBe(9);
});