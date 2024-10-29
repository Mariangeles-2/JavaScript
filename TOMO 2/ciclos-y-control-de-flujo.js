//Ejemplo de Ciclo For
for (let i = 0; i < 5; i++) {
    console.log('Número: ' + i);
}

//Ejemplo de Ciclo While
let i = 0;
while (i < 5) {
    console.log('Número: ' + i);
    i++;
}

//Ejemplo de Ciclo Do...While
let i = 0;
do {
    console.log('Número: ' + i);
    i++;
} while (i < 5);

//Ejemplo con break
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break; // Sale del ciclo cuando i es igual a 5
    }
    console.log(i); // Imprime los números de 0 a 4
}

//Ejemplo con continue
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // Omite los números pares
    }
    console.log(i); // Imprime los números impares entre 0 y 9
}
