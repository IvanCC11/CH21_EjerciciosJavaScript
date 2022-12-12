//Ejercicio 1
//Escribir una función que tome un arreglo de números y 
//devuelva el número mayor de la lista.
// Ejemplo del arreglo : [3, 5, 7, 1, 6]

const arreglo1 = [3, 2, 6, 1, 11];
console.log(Math.max(...arreglo1));

//Ejercicio 2
// María llega a su entrevista de trabajo para el rol de
// Desarrollador Junior y se le pide que resuelva este problema: 
// Dada una lista de números [-1, 3, 4, 2, 6], escribe una función
// en javascript para calcular el número más pequeño.

const arreglo2= [-1, 3, 4, 2, 6]
console.log(Math.min(...arreglo2));

// Ejercicio #3
// Escribir una función que permita saber si un número se repite dentro de un arreglo.
// Casos de prueba:
// Caso 1: Resultado esperado: El número 5 se encuentra más de una vez [1, 22, 5, 17, 10, 5, 40, 5]
// Caso 2: Resultado esperado: El número 7 se encuentra más de una vez [7, 41, 5, 7, 10, 13, 2]
// Caso 3: Resultado esperado: No hay números repetidos [1, 22, 5, 14, 24, 31, 27, 15, 105]

function numRep(arreglo) {
    let num = 0;
    
    for (let i = 0; i < arreglo.length; i++) {
      for (let j = 1; j < arreglo.length; j++) {
        if (arreglo[i] == arreglo[j]) {
          num = arreglo[i];
        };     
      } 
      
    }
  
    if (num != 0) {
      return `El número ${num} se repite`;
    } else {
      return "No hay numeros que se repitan";
    }
  };
  