// console.log("Mensaje de bienvenida en consola");

// Variables: son "cajas" que van a almacenar información. El nombre de la variable correspondería al rótulo de la caja. Es la manera que tenemos de identificarla.


// Declaración de variables: declarar una variable es "crearla".

// let nombreDeLaVariable;

// ----------------------------

// Asignar valor a una variable: asignar valor es "llenar la caja".

// nombreDeLaVariable = 1;

// console.log(nombreDeLaVariable);

// ----------------------------

// Inicializar una variable: hacemos los dos pasos anteriores en una sola línea

// let nombreDelProfesor = "Lucas";

// console.log(nombreDelProfesor);
// console.log(1)
// console.log("1")

// console.log("Lucas" + "" + "Ruiz");

// let nombreDelTutor = "José ";
// let apellidoDelTutor = "Toledo";

// //            "José "      +   "Toledo"
// console.log(nombreDelTutor + apellidoDelTutor);

// Corrección

// console.log(nombreDelTutor + " " + apellidoDelTutor);

// Copiar línea de código: ALT + SHIFT + Flecha para abajo o arriba.
// Copiar línea de código: ALT + SHIFT + Flecha para abajo o arriba.


// Mover línea de código: ALT + Flecha para abajo o arriba.

// Seleccionar varias líneas con CLICK + ALT o seleccionando una palabra y CTRL + D selecciona esas palabras.

// let numeroA = 27;
// let numeroB = 40;

// //            27   +   40
// let suma = numeroA + numeroB;

// numeroA = 10;
// // console.log(numeroA + numeroB);
// // alert(numeroA + numeroB);

// console.log(suma);

// const corresponde a CONSTANTE: no puedo reasignarle un valor a una constante. Si sabemos que el valor va a estar fijo, podemos utilizar const sin problema

// const numeroA = 10;
// const numeroB = 40;
// const suma = numeroA + numeroB;

// // numeroA = 27;

// console.log(suma);

// const nuevaConstante = "Prueba";

// No podemos reasignarle valor a una constante. Entonces, tampoco podemos solo declarla porque nunca vamos a poder ponerle un valor. Conclusión: las constantes siempre se INICIALIZAN.

// Sentencia prompt: va a ser nuestra manera (por ahora) de ingresar datos en nuestro programa.

// const nombreIngresado = prompt("Ingresá tu nombre");
// const mensaje = "Bienvenido a Coder, " + nombreIngresado;
// // Bienvenido a Coder, Lucas.

// alert(mensaje);

// let valorConfirm = confirm("Estás seguro?");

// console.log(valorConfirm);


// camelCase ---> escribimosCadaPalabraConMayusculaExceptoLaPrimera*
// PascalCase ---> EsIgualACamelPeroLaPrimeraTambienLlevaMayuscula
// snake_case ---> esto_es_como_una_serpiente**
// kebab-case ---> esto-parece-un-kebab

// Final Boss

// Solicitaremos al usuario que ingrese dos números (ejemplo 2 y 6) y le mostraremos por alerta un mensaje que diga:

// La suma de 2 y 6 nos da 8

// const num1 = parseInt(prompt("Ingrese el primer número: "));
// const num2 = parseInt(prompt("Ingrese el segundo número: "));

// const resultado = num1 + num2;

// const mensaje = "La suma de " + num1 + " y " + num2 + " nos da " + resultado;

// alert(mensaje);

// ------------------------

// Como tarea vamos a solicitarle al usuario que ingrese datos personales: nombre, apellido y edad. (Adicionalmente vamos a pedir un lapso de tiempo medido en años). El mensaje final en mi caso sería:

// Hola, Lucas Ruiz. Bienvenido a nuestra base de datos. Tu edad es 17 años.

// Si agregamos el lapso de tiempo, quiero que al final del mensaje diga "Dentro de 4 años vas a tener 21".

