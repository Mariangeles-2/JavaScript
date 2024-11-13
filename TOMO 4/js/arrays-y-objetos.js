//Declaración de Arrays

// Array vacío
const arrayVacio = [];

// Array con números
const numeros1 = [1, 2, 3];

// Array con strings
const colores = ["rojo", "verde", "azul"];

// Array con varios tipos de datos
const mixto = [1, "dos", true];


//Acceso a de un Array

const frutas = ["manzana", "banana", "cereza"];

// Acceder al primer elemento
console.log(frutas[0]);  // "manzana"

// Acceder al tercer elemento
console.log(frutas[2]);  // "cereza"

//Ejemplo de Uso del Bucle for
// Supongamos que tenemos el siguiente array de números
const numeros = [10, 20, 30, 40, 50];

// Para recorrer este array usaremos un bucle for
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]); // Esto imprimirá cada número del array en la consola
}


//Declaración de un Array de Frutas

const frutas2 = ["Manzana", "Banana", "Cereza"];
// Acceso a Elementos Específicos
// Primer Elemento: El primer elemento está en el índice 0.
console.log(frutas[0]); // Salida: Manzana

// Elemento Medio: Acceso al segundo elemento, en el índice 1.
console.log(frutas[1]); // Salida: Banana

// Último Elemento: Utilizamos length - 1 para acceder al último elemento.
console.log(frutas[frutas.length - 1]); // Salida: Cereza

