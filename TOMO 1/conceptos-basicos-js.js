//Variables: espacio de memoria para almacenar información importante.
console.log("Variables y Tipos de Datos: ...");

//Declaración
console.log("Usando let: ...");
let cliente;

//Asignación de valores
cliente = "Carlos";
console.log(cliente);

//Inicializar Variables
let edad = 37;
console.log(edad);

//Constantes: es una variable cuyo valor no puede ser modificado.
console.log("Usando const: ...");
const nacimiento = 1987;
console.log(nacimiento);

//Operaciones basicas
console.log("Operaciones basicas: ...");
let suma = 10 + 5; // 15
let producto = 20 * 2; // 40
console.log(suma);
console.log(producto);

//Condicionales
console.log("Estructuras de Control: ...");
console.log("a. Condicionales: ...");
if (suma > 20) {
    console.log("La suma es mayor que 20");
}
else {
    console.log("La suma es menor o igual a 20");
}

//Bucles
console.log("b. Bucles: ...");
console.log("For: ...");
for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log("While: ...");
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}