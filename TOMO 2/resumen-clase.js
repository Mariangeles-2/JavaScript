// console.log("En una villa nació, fue deseo de Dios");

// Operadores lógicos

// Utilizamos los operadores == para comparar igualdades entre dos valores. También tenemos el operador de desigualdad !=

// 5 == 2 ?

// console.log(5 == 2);
// console.log(5 != 2);

// Comparaciones estrictas

// let numero = 5

// console.log(5 == "5"); // Va a dar true porque compara solamente valores.
// console.log(5 === "5"); // Va dar false porque además de valores compara tipo de dato.

// console.log(numero === 5);
// console.log(numero !== 5);

// Operador NOT (!)

// console.log(!true);


// Operadores mayor / menor > <: mayor o igual / menor o igual >=   <=

// console.log(2 <= 2);
// console.log(2 >= 2);


// Operador AND (&&):

// let asado = true;
// let cerveza = true;

// console.log(asado && cerveza);

// AND va a verificar que dos o más condiciones se cumplan para devolver true. Esto quiere decir que cuando usamos AND solamente vamos a recibir true cuando TODO sea true. Con al menos un false, ya tenemos false como resultado final.


// Operador OR (||)

// let asado = true;
// let hamburguesas = true;

// console.log(asado || hamburguesas);

// OR va a verificar dos o más condiciones. Con que al menos una se cumpla, ya tenemos true. Qué quiere decir esto? Que solo me va a devolver false si TODAS son false.

// Super ejemplo

// Vamos a comer asado y vamos a tomar fernet, cerveza o vino
// console.log(asado && (fernet || cerveza || vino))


// -------------------------------------------------------------

// Condicionales: if - if else.

/*

if (condicion) {

    PONGO DENTRO DE LLAVES TODO LO QUE QUIERA HACER

};


*/

// if (true) {
//     console.log("Acá hay un true");
//     console.log("Te juro que acá hay un true");
// };

// if (false) {
//     alert("Acá hay un false");
//     alert("Te juro que acá hay un false");
// };

// if (false) {
//     console.log("Acá hay un true");
//     console.log("Te juro que acá hay un true");
// } else {
//     alert("Acá hay un false");
//     alert("Te juro que acá hay un false");
// }

// Ejemplo del boliche.

// let edad = parseInt(prompt("Ingrese su edad"));

// if (edad > 17) {
//     alert("Bienvenido al súper fantástico bailable");
// } else {
//     alert("Despídete del boliche, lince");
// };

// Boliche para mayores de 17 y menores de 26

// let validacion = edad > 17 && edad < 26;

// if(validacion){
//     alert("Estás en el rango");
// } else {
//     alert("Estás fuera de rango. Nos vimo en Disney");
// };

// if(edad < 18){
//     alert("Sos un niño. No podés pasar!");
// } else if(edad < 26) {
//     alert("Adelante, barriga picante");
// } else {
//     alert("Vos sos anciano para este boliche");
// };

// let idioma = parseInt(prompt("Bienvenido! ¿En qué idioma desea saludar?\n\n1. Español\n2. Inglés\n3. Italiano\n4. Euskera\n5. Portugués\n6. Japonés\n7. Francés"));


// if (idioma === 1) {
//     alert("Hola");
// } else if (idioma === 2) {
//     alert("Hello");
// } else if (idioma === 3) {
//     alert("Ciao");
// } else if (idioma === 4) {
//     alert("Egun on");
// } else if (idioma === 5) {
//     alert("Ola");
// } else if (idioma === 6) {
//     alert("こんにちは");
// } else if (idioma === 7) {
//     alert("Bonjour");
// } else {
//     alert("No tenemos ese idioma");
// };

// Switch

// switch (idioma) {
//     case 1:
//         alert("Hola");
//         break;
//     case 2:
//         alert("Hello");
//         break;
//     case 3:
//         alert("Ciao");
//         break;
//     case 4:
//         alert("Egun on");
//         break;
//     case 5:
//         alert("Ola");
//         break;
//     case 6:
//         alert("こんにちは");
//         break;
//     case 7:
//         alert("Bonjour");
//         break;
//     default:
//         alert("No tenemos ese idioma");
//         break;
// };

// Podemos hacer con if else anidados tantas veces como se desee. También podemos hacerlo con switch pero solo en casos puntuales. Tienen que ser comparaciones estrictas de igualdades porque así funciona switch. Si vamos a comparar mayor o menor, sí o sí utilizamos if else.

// Conclusión: todo lo que podamos hacer con switch lo podemos hacer con if else, pero no todo lo que hagamos con if else se puede hacer con switch.


// -------------------------------------------------------------

// Ciclos ---> los utilizamos cuando vayamos a hacer una tarea repetitiva. Tenemos dos tipos de ciclos: ciclos por conteo (conozco la cantidad de iteraciones que quiero hacer, es decir, la cantidad de vueltas, pasos, etc.) o ciclos por condicion (no sé cuántas veces pero sé de una condición que es la que me va a decir que siga repitiendo lo mismo).

// Ciclo for: es un ciclo por conteo, con lo cual tenemos que saber cuántas iteraciones quiero hacer.

// Sugar sintax:

/*

i = i+1
i += 1
i++

*/

// let numero = parseInt(prompt("Ingrese el número que desea conocer su tabla"));

// 5 x 1 = 5
// 5 x 2 = 10

// for (let i = 1; i < 11; i++) {
//     console.log(numero + " x " + i + " = " + (numero * i));
// };

// console.log("Ciclo finalizado");

/*

let i = 1 ---> Por lo general empezamos desde 0. Esta primera parte nos permite declarar lo que va a ir modificándose. O sea, nuestro contador.

i < 11 ---> Ponemos nuestro corte. Con esto ya sabemos que vamos a ir de 1 a 10.

i++ ---> Sabemos que vamos a ir sumando uno en cada iteración.

// for(let i = 1; i < 11; i++)

for(contador; condicion; modificacion){
// La tarea que quiera hacer repetidas veces
}

*/

// for(let i = 10; i > 0; i--){
//     console.log(i);
// };

// for(let i = 1; i < 20; i++){
//     if(i === 5){
//         continue; // Si nos encontramos con un continue, automáticamente pasa a la siguiente iteración
//     };
//     console.log(i);

//     if(i === 17){
//         break; // Si nos encontramos con un break, automáticamente el ciclo finaliza
//     };

// };

// Mi usuario va a ser "user" y mi contraseña va a ser "password"

// for (let i = 1; i <= 3; i++) {
//     let usuario = prompt("Ingrese su usuario");
//     let clave = prompt("Ingrese su contraseña");

//     if (usuario === "user" && clave === "password") {
//         alert("Bienvenido. Iniciaste sesión con éxito");
//         break;
//     } else {
//         alert("Credenciales inválidas");
//         if (i === 2) {
//             alert("Te queda un intento");
//         };
//         if (i === 3) {
//             alert("Tu cuenta será bloqueada");
//         };
//     };
// };

// WHILE:

// let confirmacion = confirm("Quiere ingresar números?");

// while(confirmacion){
//     let numero = parseInt(prompt("Ingrese el número que desea mostrar"));
//     alert(numero);
//     confirmacion = confirm("Quiere seguir?");
// };

// DO WHILE:

// let confirmacion;

// do {
//     let numero = parseInt(prompt("Ingrese el número que desea mostrar"));
//     alert(numero);
//     confirmacion = confirm("Quiere seguir?");
// } while (confirmacion);

// Ejercicio final super BOSS.

// Vamos a armar un menú de opciones que, POR AHORA solo nos va a avisar la opción elegida. Qué quiere decir? Que algún día lo vamos a usar un poquitito más desarrollado.

/*

1. Compre
2. Venda
3. Verifique stock

0. SALIR

*/

// let opcion;

// do{
//     opcion = parseInt(prompt("Bienvenido al menú de opciones.\n\n1. Para comprar\n2. Para vender\n3. Para verificar stock\n\nSi desea salir, ingrese 0"));

//     switch (opcion) {
//         case 0:
//             alert("Gracias vuelvas prontos!");
//             break;
//         case 1:
//             alert("Vas a comprar");
//             break;
//         case 2:
//             alert("Vas a vender");
//             break;
//         case 3:
//             alert("Vas a ver stock");
//             break;

//         default:
//             alert("La opción ingresada no es válida");
//             break;
//     };

// } while(opcion !== 0);


// Tarea para la casa: lo que hice con switch lo van a hacer con if else. Lo que hice con do while traten de hacerlo con while.
