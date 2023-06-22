function eliminarNoCanonicos(cadenaADN) {
    const basesCanonicas = ['A', 'C', 'G', 'T'];
    let nuevaCadena = '';
  
    for (let i = 0; i < cadenaADN.length; i++) {
      const base = cadenaADN.charAt(i);
      if (basesCanonicas.includes(base.toUpperCase())) {
        nuevaCadena += base;
      }
    }
  
    return nuevaCadena;
  }
  
  const cadenaADN = 'QWERTYUIOPÁSDFGHJKLÑZXGHM';
  const resultado = eliminarNoCanonicos(cadenaADN);
  console.log(resultado);  
