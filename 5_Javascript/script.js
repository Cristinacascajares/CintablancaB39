//alert("Funciona");
// Variables 
//Espacio dedicado para almacenar un dato
// Nombre = Valor;
var numero = 5;
//Número

var checkbox = true;
//Booleana

var nombre = "Gerardo";
//String si tiene comillas es un texto

// Mostrar variables dentro de la consola
console.log(numero);
console.log(checkbox);
console.log(nombre);

var x = 9;
var y = 4;
var z = 3;

var suma = x + z;
console.log("La suma es");
console. log(suma);
console.log("la suma es " + suma);

//console.log(nombre + numero);
// Esto es un error por que no puede sumar letras con números
// Resta - 
var resta = x - z;
console.log("la resta es " + resta);
// Multiplicación *
var multiplicacion = x * z;
console.log("la multiplicación es " + multiplicacion);
//División /
var division = x / z;
console.log("La división es " + division);

// Operadores lógicos
// mayor que
console.log( 9 > 3);
//menor que
console.log ( 3 < 1);
// Igual que
console.log (5 == 5);
// Diferente
console.log (3 != 3);

// Módulo
console.log("⚡️");
var modulo = 3 % 2;
// Si el residuo es 0 => es par
// Si el resodio es != 0 => es impar
console.log(modulo)


//Concatenar
console.log("La suma de " + x + " + " + z + " es " + suma);

//Enumerar variables
console.log(suma, resta, division, multiplicacion);
console.log("🌈");
console.log("5"==5);

// Funciones
function sumaNumeros(a,b) {
    var resultado = a + b;
    return resultado
}
// Función
// Parámetro   Algoritmo   Resultado
//
// Punto A     ________
//         ==>|        |
//            |        | = Tarifa
// Punto B    |________|

console.log(sumaNumeros(5,9));

var edad = prompt ("Ingresa tu edad.");
edad = parseInt(edad);
//Para poder capturar la información capturada en prompt colocar un console....
// Nan significa no es un número
console.log(edad);
