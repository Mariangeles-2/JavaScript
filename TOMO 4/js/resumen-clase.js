// Arrays

// let arrayDePostres = ["Tiramisú", "Pastafrola", "Cabsha"];
// let arrayDePrecios = [3500, 2800, 3000];
// console.log("Este array tiene " + arrayDePrueba.length + " elementos");

// let arrayDePrueba = ["Lucas", "Javier", "José", "Agata", "Mariangeles", "Alejandra", "Daniel"];

// let opcion = parseInt(prompt("Qué usuario desea buscar?"));

// // Para acceder a un elemento específico de un array, utilizamos la "BRACKET NOTATION", es decir, corchetes.

// // console.log(arrayDePrueba[5]);

// if(opcion >= 0 && opcion < arrayDePrueba.length){
//     console.log(arrayDePrueba[opcion]);
// } else {
//     console.log("Valor inválido");
// };

// LENGTH O LENGHT???: LOS GATITOS TIENEN HAMBRE

// arrayDePrueba[3] = "Kevin";

// console.log(arrayDePrueba);

// let arrayDePrueba = ["Javier", "José", "Agata", "Mariangeles", "Alejandra", "Daniel"];


// console.log(arrayDePrueba);

// for (let i = 0; i < arrayDePrueba.length; i++) {
//     if (i < arrayDePrueba.length - 1) {
//         alert("Estudiante número " + (i + 1) + ": " + arrayDePrueba[i] + "\nPróximo/a estudiante: " + arrayDePrueba[i + 1]);
//     } else {
//         alert("Estudiante número " + (i + 1) + " (último estudiante): " + arrayDePrueba[i]);
//     };
// };

// let arrayDePrueba = ["Javier", "José", "Agata", "Mariangeles", "Alejandra", "Daniel"];

// let nuevoAlumno = prompt("Ingrese el nombre del nuevo alumno");
// arrayDePrueba.push(nuevoAlumno);
// arrayDePrueba.unshift(nuevoAlumno);

// console.log(arrayDePrueba);

// Para agregar elementos a un array utilizamos push (agrega al final) y unshift (agrega al comienzo).

// Cómo hacemos para quitar elementos de un array?

// Agregar: PUSH y UNSHIFT
// Quitar: POP y SHIFT

// console.log(arrayDePrueba);
// arrayDePrueba.pop();
// arrayDePrueba.push("Daniel");
// console.log(arrayDePrueba);
// arrayDePrueba.shift();
// console.log(arrayDePrueba);


// JOIN: une todos los elementos del array

// let otroArray = ["Camila", "Alejandra", "Alberto"];

// console.log(otroArray.join("\n"))

// REVERSE: invierte el orden de los elementos del array. Es considerado un método DESTRUCTIVO porque MODIFICA EL ARRAY ORIGINAL.

// let arrayFecha = [2024, 11, 13];
// console.log(arrayFecha.join("/"));
// arrayFecha.reverse();
// console.log(arrayFecha.join("/"));

// console.log(arrayFecha);

// indexOf: busca coincidencia exacta de un elemento dentro del array y nos devuelve su índice. Si hay varios elementos iguales, nos devuelve el primero que encuentra. Si no hay coincidencias, nos devuelve -1

// let nombres = ["Nabila", "Agata", "José", "Camila", "José"];

// let indiceACambiar = nombres.indexOf("José");

// nombres[indiceACambiar] = "Otro";

// console.log(nombres);

// let nombreACambiar = prompt("Ingrese el nombre que desea cambiar"); // José

// let indiceACambiar = nombres.indexOf(nombreACambiar);

// if(indiceACambiar === -1){
//     alert(nombreACambiar + " no está en el array original");
// } else {
//     let nuevoNombre = prompt("Ingrese el nuevo nombre"); // Otro
//     nombres[indiceACambiar] = nuevoNombre;
// };

// console.log(nombres);

// INCLUDES: funciona similar al indexOf ya que busca coincidencias y en caso de encontrar devuelve true. En caso de no encontrar, devuelve false.

/*

Comparando indexOf con includes:

-Si el elemento está, me va a dar un número (indexOf) y me va dar true (includes)

-Si el elemento no está, me va a dar -1 (indexOf) y me va a dar false (includes)

*/

// let arrayNuevo = ["Lucas", "Gabriel", "Ruiz"]

// let nombreAAgregar = prompt("Agregue el nombre");

// if(arrayNuevo.includes(nombreAAgregar)){
//     alert("Ya agregaste a " + nombreAAgregar);
// } else {
//     arrayNuevo.push(nombreAAgregar);
// };


// console.log(arrayNuevo);


// SORT: este método nos permite ordenar los elementos del array. También es un método DESTRUCTIVO. Es decir, modifica el array original.

// let arrayDePrueba = ["Javier", "José", "Agata", "Mariangeles", "Alejandra", "Daniel"];

// arrayDePrueba.sort();
// arrayDePrueba.reverse();

// console.log(arrayDePrueba);

// let arrayDeNumeros = [2, 6, 1, 9, 8, 11, 25, 4, 32];

// arrayDeNumeros.sort();

// console.log(arrayDeNumeros);


// SPLICE: permite eliminar uno o varios elementos de un array.

let arrayDePrueba = ["Javier", "José", "Agata", "Mariangeles", "Alejandra", "Daniel"];

// arrayDePrueba.splice(3,1);

// console.log(arrayDePrueba);


// SLICE: toma una "porción" del array original y me devuelve un nuevo array con los elementos de esa porción

// let nuevoArray = arrayDePrueba.slice(1, 4);

// console.log(nuevoArray);


// CONCAT: nos permite CONCATENAR dos arrays en un único array con sus elementos combinados.

// let arrayA = [1, 2, 3];
// let arrayB = ["A", "B", "C"];

// let arrayConcat = arrayB.concat(arrayA, arrayA);

// console.log(arrayA.concat(arrayB).concat(arrayB).concat(arrayA));

// console.log(arrayConcat);



// ENTREGA FINAL

/*

Tenemos que hacer un simulador de algún sitio web que nos resuelva un problema. Dentro de este simulador, tenemos que incluir todo lo visto hasta el momento. Además, lo que agregamos tiene que estar relacionado entre sí. Qué quiere decir esto? Si hacen un for para mostrar tablas de multiplicar y un if para validar un logueo, ESTÁ MAL. 

Red flags:

-VAR ---> Desaprobado y los busco en las casas.
-ChatGPT ---> Lo inventé yo, me sé todas las mañas, no lo usen.
-Código copiado ---> Desaprobados los dos trabajos.

-Variables
-Condicionales
-Ciclos
-Funciones
-Arrays y sus métodos

*/


// let arrayAlumnos = [];

// let opcion;

// function agregarAlumno() {
//     let nuevoAlumno = prompt("Ingrese el alumno a agregar");
//     arrayAlumnos.push(nuevoAlumno);
// };

// function mostrarAlumnos() {
//     let listaDeAlumnos = arrayAlumnos.join("\n");
//     alert(listaDeAlumnos);
// };

// do {

//     opcion = parseInt(prompt("Ingrese la opción deseada. 1 para agregar alumno, 2 para ver los alumnos. Para salir ingrese 0"));

//     switch (opcion) {
//         case 0:
//             alert("Gracias, vuelva pronto!");
//             break;
//         case 1:
//             agregarAlumno();
//             break;
//         case 2:
//             if (arrayAlumnos.length > 0) {
//                 mostrarAlumnos();
//             } else {
//                 alert("No tenés alumnos");
//             }
//             break;
//         default:
//             alert("Opción incorrecta");
//             break;
//     };
// } while (opcion !== 0);



// Tarea:

/*

1. Hacer su propia entrega, lógicamente.
2. En caso que ya hayan terminado y estén aburridos o no sepan qué hacer, tomen el ejemplo de arriba y agreguen todas las funcionalidades que se les ocurra. Agreguen otros alerts u otros mensajes para que esto sea más bonito.

*/