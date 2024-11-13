//Métodos de Modificación

//Método push : añade al final de array
let frutas1 = ['manzana', 'banana'];
frutas.push('naranja');
console.log(frutas1);  // Salida: ['manzana', 'banana', 'naranja']

//Método pop : elimina el último itel del array y lo devuelve
let frutas2 = ['manzana', 'banana', 'naranja'];
let frutaEliminada = frutas.pop();
console.log(frutaEliminada);  // Salida: 'naranja'
console.log(frutas2);  // Salida: ['manzana', 'banana']

//Método shift : elimina el primer item del array y lo devuelve
let frutas3 = ['manzana', 'banana', 'naranja'];
let primeraFruta = frutas.shift();
console.log(primeraFruta);  // Salida: 'manzana'
console.log(frutas3);  // Salida: ['banana', 'naranja']

//Método unshift : agrga 1 o mas itemas al principio del array
let frutas4 = ['banana', 'naranja'];
frutas.unshift('manzana');
console.log(frutas4);  // Salida: ['manzana', 'banana', 'naranja']

//Métodos de Búsqueda

//Método indexOf
let nombres = ['Ana', 'Juan', 'Carlos', 'Marta'];
let indice = nombres.indexOf('Carlos');
console.log(indice);  // Salida: 2

//Método includes
let frutas = ['manzana', 'naranja', 'banana'];
let contiene = frutas.includes('naranja');
console.log(contiene);  // Salida: true

//Ordenar arrays
//Método sort con números
let numeros = [40, 1, 5, 200, 3];  
numeros.sort((a, b) => a - b);  //(a, b) => a - b) sin esto solo ordena por el primer dígito de los números
console.log(numeros);  

//Método sort con palabras
let palabras = ["auto", "zorro", "programacion", "Banana"];  
palabras.sort((a, b) => a.localeCompare(b));  //(a, b) => a.localeCompare(b) sin esto ordena por el primer dígito si está en mayúscula
console.log(palabras);  

//Método reverse  
numeros.reverse();  
console.log(numeros); // da vuelta los datos

// Concatenar Arrays
// Uso básico con coma (default)
let colores = ['Rojo', 'Verde', 'Azul'];
let resultado = colores.join();
console.log(resultado); // "Rojo,Verde,Azul"

// Uso con separador de espacio
let nombres1 = ['Ana', 'Juan', 'Carlos'];
let listaNombres = nombres.join(' ');
console.log(listaNombres); // "Ana Juan Carlos"

// Uso con separador de guión
let elementos = ['Hidrógeno', 'Oxígeno', 'Carbono'];
let formula = elementos.join('-');
console.log(formula); // "Hidrógeno-Oxígeno-Carbono"

// Uso con separador vacío
let letras = ['J', 'a', 'v', 'a'];
let palabra = letras.join('');
console.log(palabra); // "Java"