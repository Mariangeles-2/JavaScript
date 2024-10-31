//Nullish coalescing
resultado = a ?? b

//Ejemplo Comparativo
let valor1 = 0;
let valor2 = valor1 || "valor predeterminado"; // Retorna "valor predeterminado"
let valor3 = valor1 ?? "valor predeterminado"; // Retorna 0

//Casos de Uso Prácticos
let inputUsuario;
let nombreUsuario = inputUsuario ?? "Invitado";
console.log(nombreUsuario); // Imprime "Invitado"

//Manejo de Configuraciones de Aplicación
let configuracionUsuario = {
    elementosMostrados: 0
};
let cantidadElementos = configuracionUsuario.elementosMostrados ?? 10;
console.log(cantidadElementos); // Imprime 0