// Ejercicio 1: Función de Suma
// Crea una función llamada suma que reciba dos parámetros (números) y retorne su suma. Luego, llama a la función y muestra el resultado en la consola.

function sumar(numeroA, numeroB) {
    return numeroA + numeroB;
}

console.log(sumar(5, 6));

// Ejercicio 2: Función de Saludo
// Crea una función llamada saludo que reciba un nombre como parámetro y muestre un mensaje de saludo en la consola. Por ejemplo, si el nombre es "Juan", el mensaje debería ser "Hola, Juan!".

function saludar (nombre) {
    console.log("Hola, " + nombre + "!");
}

saludar("Juan");

// Ejercicio 3: Función Anónima
// Crea una función anónima que calcule el área de un rectángulo. La función debe recibir dos parámetros: base y altura. Luego, llama a esta función y muestra el resultado en la consola.

const calcularAreaDeRectangulo = function(base, altura) {
    return base * altura;
}

console.log(calcularAreaDeRectangulo(5, 8));

// Ejercicio 4: Función Flecha
// Crea una función flecha llamada multiplicar que reciba dos números y retorne su producto. Llama a esta función y muestra el resultado en la consola.

const multiplicar = (numeroA, numeroB) => numeroA * numeroB;

console.log(multiplicar(4, 8));

// Ejercicio 5: Alcance de Variables
// Crea una variable global llamada contador y asígnale el valor 0. Luego, crea una función llamada incrementarContador que aumente el valor de contador en 1 cada vez que se llame. Muestra el valor de contador en la consola después de llamar a la función varias veces.

let contador = 0;

function incrementarContador() {
    contador = contador + 1;
}

incrementarContador();
console.log(contador);
incrementarContador();
console.log(contador);
incrementarContador();
console.log(contador);


// Ejercicio 7: Contador de Palabras
// Crea una variable global llamada contadorPalabras que inicie en 0. Luego, crea dos funciones:

// contarPalabras(frase): que reciba una frase como parámetro, cuente cuántas palabras hay en la frase y sume ese número a contadorPalabras.
// mostrarContador(): que muestre en la consola el valor actual de contadorPalabras.
// Llama a contarPalabras varias veces con diferentes frases y luego llama a mostrarContador.

let contadorPalabras = 0

function contarPalabras(frase) {
    contadorPalabras = frase.split(" ").length;
}

function mostrarContador() {
    console.log(contadorPalabras);
}

contarPalabras("Hola pepita");
mostrarContador();
contarPalabras("Pipi, te amo");
mostrarContador();

