//Condicionales if, else if, else
let calificacion = 75;

if (calificacion >= 90) {
    console.log("Excelente");
} else if (calificacion >= 70) {
    console.log("Bueno");
} else {
    console.log("Necesitas estudiar más");
}

//Operadores de comparación
//==
console.log(2 == '2'); // true

//===
console.log(2 === '2'); // false

//!=
console.log(2 != '3'); // true

//!==
console.log(2 !== '2'); // true

//< <= > >=
console.log(3 < 4); // true console.log(5 >= 5); // true

//&&
const esSexoFemenino = true;
const esMayorDeEdad = true;

if (esSexoFemenino && esMayorDeEdad) {
    console.log("Es toda una mujer adulta");
}
console.log(true && false); // false

//||
const estoyCansado = true;
const tengoHambre = false;

if (estoyCansado || tengoHambre) {
    console.log("No hay SnuSnu");
}
console.log(true || false); // true

//!
const estaLloviendo = false;

if (!estaLloviendo) {
    console.log("No lleves paraguas");
} else {
    console.log("Llevá paraguas");
}
console.log(!true); // false

//Ejemplo 1

let edad = 20;
let acceso = (edad >= 18) && (edad <= 30);
console.log(acceso); // true si la edad está entre 18 y 30

//Ejemplo 2
let temperatura = 35;
let advertencia = (temperatura < 0) || (temperatura > 32);
console.log(advertencia); // true si la temperatura es menor que 0 o mayor que 32

