// // Funciones ---> bloque de código representado por una palabra mágica (el nombre de la función)

// /*

// Sintaxis genérica:

// function nombreDeLaFuncion(){
//     // Lo que quiera ejecutar
// };

// */

// // function ingresarNumero() {
// //     let numero = parseInt(prompt("Ingresá un número"));
// //     alert("Ingresaste el número " + numero);
// // };

// // for (let i = 0; i < 10; i++) {
// //     ingresarNumero();
// // };


// // let confirmacion;

// // do {
// //     ingresarNumero();
// //     confirmacion = confirm("Quiere seguir ingresando números?");
// // } while (confirmacion);

// // -----------------------------

// /*
// Función lineal

// F(x) = ax + b ---> F(x) = 2x + 1;
// F(1) ????
// */

// // function suma(numeroA, numeroB) {
// //     console.log("La suma entre " + numeroA + " y " + numeroB + " es: " + (numeroA + numeroB));
// // };

// // let numeroA = parseInt(prompt("Ingresá el primer número")); // 10
// // let numeroB = parseInt(prompt("Ingresá el segundo número")); // 11

// // // suma(numeroA, numeroB);


// // suma(2, 5);
// // // suma(8, 15);

// function calculadora(numeroA, numeroB, operacion) {
//     switch (operacion) {
//         case "+":
//             alert("La suma entre " + numeroA + " y " + numeroB + " es: " + (numeroA + numeroB));
//             return (numeroA + numeroB);
//         case "-":
//             alert("La resta entre " + numeroA + " y " + numeroB + " es: " + (numeroA - numeroB));
//             return (numeroA - numeroB);
//         case "*":
//             alert("El producto entre " + numeroA + " y " + numeroB + " es: " + (numeroA * numeroB));
//             return (numeroA * numeroB);
//         case "/":
//             if (numeroB === 0) {
//                 alert("No se puede dividir entre 0");
//                 break;
//             } else {
//                 alert("El cociente entre " + numeroA + " y " + numeroB + " es: " + (numeroA / numeroB));
//                 return (numeroA / numeroB);
//             };

//         default:
//             alert("Ingresá una operación válida (+ - * /)")
//             return "Datos erróneos";
//     };
// };


// // let eleccionDelUsuario = confirm("Quiere hacer cálculos matemáticos en nuestra súper calculadora?");

// // while (eleccionDelUsuario) {
// //     let primerNumero = parseInt(prompt("Ingresá tu primer número"));
// //     let operacionElegida = prompt("Ingresá la operación que quieras efectuar (+ - * /)");
// //     let segundoNumero = parseInt(prompt("Ingresá tu segundo número"));

// //     calculadora(primerNumero, segundoNumero, operacionElegida);

// //     eleccionDelUsuario = confirm("Quiere seguir?");

// // };


// // let primerNumero = parseInt(prompt("Ingresá tu primer número"));
// // let operacionElegida = prompt("Ingresá la operación que quieras efectuar (+ - * /)");
// // let segundoNumero = parseInt(prompt("Ingresá tu segundo número"));

// // let resultado = calculadora(primerNumero, segundoNumero, operacionElegida);

// // console.log(resultado);

// // let variableDePrueba = "Chaupi chaupi el corazón";

// // function prueba(){
// //     let variableDePrueba = "Hola Yola";
// //     variableDePrueba = "Otro valor";
// //     console.log(variableDePrueba);
// // };

// // prueba();

// // console.log(variableDePrueba);

// // function saludar(persona){
// //     alert("Hola, " + persona);
// // };

// // saludar("Mariangeles");

// // ---------------------------

// // Funciones anónimas y funciones flecha

// // Recientemente vimos las funciones de la manera "tradicional". Las funciones anónimas y funciones flecha son otras maneras a nivel sintaxis de escribir funciones. Van a hacer lo mismo ciertamente pero tenemos una sintaxis diferente y algunos truquitos ocultos.

// // // Anónimas: 

// // function funcionTradicional(parametro){
// //     alert(parametro);
// // };

// // const funcionAnonima = function(parametro){
// //     alert(parametro);
// //     // funcionTradicional("Otra cosa");
// // };

// // // Flecha:

// // const funcionFlecha = (parametro) => {
// //     alert(parametro);
// // };


// function sumaTradicional(numeroA, numeroB){
//     return (numeroA + numeroB);
// };

// const sumaAnonima = function(numeroA, numeroB){
//     return (numeroA + numeroB);
// };

// // const sumaFlecha = (numeroA, numeroB) => {
// //     return (numeroA + numeroB);
// // };

// const sumaFlecha = (numeroA, numeroB) => numeroA + numeroB;

// let resultadoTradicional = sumaTradicional(1,2);
// let resultadoAnonima = sumaAnonima(1,2);
// let resultadoFlecha = sumaFlecha(1,2);

// console.log("Tradicional: " + resultadoTradicional);
// console.log("Anonima: " + resultadoAnonima);
// console.log("Flecha: " + resultadoFlecha);


// Tarea para la casa: todo lo que se hizo con función tradicional, lo vamos a hacer con función anónima y/o función flecha