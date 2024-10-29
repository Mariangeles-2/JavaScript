// Como tarea vamos a solicitarle al usuario que ingrese datos personales: nombre, apellido y edad. (Adicionalmente vamos a pedir un lapso de tiempo medido en años). El mensaje final en mi caso sería:

// Hola, Lucas Ruiz. Bienvenido a nuestra base de datos. Tu edad es 17 años.

// Si agregamos el lapso de tiempo, quiero que al final del mensaje diga "Dentro de 4 años vas a tener 21".

let nombre= prompt("Poné tu nombre");
let apellido = prompt("Poné tu apellido");
let edad = parseInt(prompt("Poné tu edad"));
const lapsoDeTiempo = parseInt(prompt("Poné un lapso de tiempo en años"));
const edadMasLapsoDeTiempo = edad + lapsoDeTiempo;
let mensaje = "Hola, " + nombre + " " + apellido + ". Bienvenido a nuestra base de datos. Tu edad es " +  edad + " años. Dentro de " + lapsoDeTiempo + " años vas a tener " + edadMasLapsoDeTiempo + ".";
alert(mensaje);
console.log(mensaje);

//Poner los datos de pareja
//Tu novio es Tomas Pais. Su edad es 29 años.
nombre = prompt("Poné el nombre de tu pareja");
apellido = prompt("Poné la edad de tu pareja");
edad = parseInt(prompt("Poné la edad de tu pareja"));
mensaje = "Tu novio es " + nombre + " " + apellido + ". Su edad es " + edad + " años.";
alert(mensaje);
console.log(mensaje);

