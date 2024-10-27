// Como tarea vamos a solicitarle al usuario que ingrese datos personales: nombre, apellido y edad. (Adicionalmente vamos a pedir un lapso de tiempo medido en años). El mensaje final en mi caso sería:

// Hola, Lucas Ruiz. Bienvenido a nuestra base de datos. Tu edad es 17 años.

// Si agregamos el lapso de tiempo, quiero que al final del mensaje diga "Dentro de 4 años vas a tener 21".

const nombre= prompt("Poné tu nombre");
const apellido = prompt("Poné tu apellido");
const edad = prompt("Poné tu edad");
const años = prompt("Poné un lapso de tiempo");


const mensaje = "Hola, " + nombre + " " + apellido + ". Bienvenido a nuestra base de datos. Tu edad es " +  edad + " años. Dentro de " + "" + " años vas a tener " + "" + ".";
alert(mensaje);

