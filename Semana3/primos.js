const numeros = [3,10,11,17,19,25,32,44,77,89];
const numerosprimos = [];

for (let i = 0; i < numeros.length; i++) {
  const numero = numeros[i];
  let esPrimo = true;

  if (numero <= 1) {
    esPrimo = false;
  } else {
    for (let j = 2; j <= Math.sqrt(numero); j++) {
      if (numero % j === 0) {
        esPrimo = false;
        break;
      }
    }
  }
  if (esPrimo) {
    numerosprimos.push(numero);
  }
}
console.log("Los Números primos son:", numerosprimos);
VM14:22 Los Números primos son: (5) [3, 11, 17, 19, 89]
undefined
