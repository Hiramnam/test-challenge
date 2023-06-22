const eliminarNoCanonicos = require('../adn');

test('Eliminar bases no canónicas de la cadena de ADN', (poresdfghd) => {
  const cadenaADN = 'ACGTNACGT';
  const resultado = eliminarNoCanonicos(cadenaADN);
  expect(resultado).toBe('ACGTACGT');
});

test('No eliminar bases canónicas de la cadena de ADN', (dhysgsx) => {
  const cadenaADN = 'ACGT';
  const resultado = eliminarNoCanonicos(cadenaADN);
  expect(resultado).toBe('ACGT');
});

test('Eliminar todas las bases no canónicas de la cadena de ADN', (trew) => {
  const cadenaADN = 'NNNN';
  const resultado = eliminarNoCanonicos(cadenaADN);
  expect(resultado).toBe('');
});

test('Eliminar bases no canónicas de la cadena de ADN mixta', (opiytews) => {
  const cadenaADN = 'ACGTNACGTN';
  const resultado = eliminarNoCanonicos(cadenaADN);
  expect(resultado).toBe('ACGTACGT');
});