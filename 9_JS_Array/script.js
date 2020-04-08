//Variables primitivas
var nombre="Cristina"; // String
var edad = 26; // Number
var mayorDeEdad = true; // Booleano

// Variable compuestas
// Arreglo - array -> serie de datos ordenados
//Índice
//                0         1            2             3
var paises = ["Colombia", "México", "Costa Rica", "el salvador"];

console.log(paises);
console.log(paises[2]);
console.log(paises[4]); //muestra undefined por que no está definido en el ídice 

paises[4] = "España";

console.log(paises);

paises[5] = "Italia";

//Nos permite tener más ordenado todo
console.log(paises);

for(var i = 0; i <= 5; i++) {
    console.log(paises[i]);
}

var numeros = [];

for(var i = 0; i<= 100; i++) {
    numeros[i] = i;
}

console.log(numeros);

var arreglo2 =["Gerardo", 19,[1,2], true, "hola", false];

var cubo = [[1,5], [0,9], [9,0]];
console.log(cubo);

console.log(arreglo2);
