// Para saber que funciona: alert("Funciona!");

var edad = 15;

console.log(3<5); // true
if(edad>=18){
console.log("Eres mayor de edad");
console.log("Puedes votar");
console.log("✨"); 
} else{
    console.log("No eres mayor de edad");
    console.log("No puedes votar");
    console.log("🙅🏽‍♀️");
}


var dia = "soleado";
var hora = "5:00";
if (dia === "nublado") {
    console.log("No salgas");
} else {
    if (hora === '5:00') {
        console.log("Estás a tiempo para la función 🎥");
    } else {
       console.log("¡Corre! Vas tarde 🏃‍♀️");
    }
}
// Operación módulo %
// Imprimir Fizz si un número el múltiplo de 3
// Imprimir Buzz si un número el múltiplo de 5
// Imprimir FizzBuzz si el número es múltriplo de 3 y 5
// Imprimir número

var numero = 15;
//if(numer % 3 === 0) {
//    if(numero % 5 === 0){
//        console.log("FizzBuzz");
//    }else {
//    console.log("Fizz");
//} 
//else if(numero % 5 === 0){
//        console.log("Buzz");
//    } else {
//        console.log(numero);
//    } 

if(numero % 3 === 0 && numero % 5 === 0 ){
    console.log("fizzBuzz");
} else if(numero % 3 === 0) {
    console.log("Fizz");
} else if(numero % 5 === 0) {
    console.log("Buzz");
} else {
    console.log(numero);
}

// AQUI EMPIEZA "FOR"

// índice ; condición ; pasos
//  i = 0 ;    0<=10  ; i=0+1;    vuelta 0
//  i = 1 ;    1<=10  ; 1=1+1;    vuelta 1
//  i = 2 ;    2<=10  ; 2=2+1;    vuelta 2
//  i = 3 ;    3<=10  ; 3=3+1;    vuelta 3
for(var i= 0; i<= 10; i = i + 1){
    console.log("vueltas " + i);
}

// Infinito !!!
// for(var i=10); i<=10; i--){
// console.log(i);
//}

for(var i = 10; i >= 0; i--){
    console.log(i);
}

// For 5 al 20

for(var i= 5; i<= 20; i = i + 1){
    console.log("numero " + i);
}

//For 10 al 3

for(var i= 10; i>= 3; i = i - 1){
    console.log("manzanas " + i);
}

//for 1 al 100

//for(var i= 1; i<= 100; i = i++){
//    console.log("perritos " + i);
//}

// Imprimir Fizz si un número el múltiplo de 3
// Imprimir Buzz si un número el múltiplo de 5
// Imprimir FizzBuzz si el número es múltriplo de 3 y 5
// Imprimir número
//console.log("Del 1 al 100");
//for(var i= 1; i<= 100; i = i++){
//if(numero % 3 === 0 && numero % 5 === 0 ){
//    console.log("fizzBuzz");
//} else if(numero % 3 === 0) {
//    console.log("Fizz");
//} else if(numero % 5 === 0) {
//    console.log("Buzz");
//} else {
//    console.log(numero);
//}
//}

// While
//console.log("while");
//var i = 0;
//While(i <= 10) {
//    console.log(i);
//    i++;
//}

// do while
console.log("Do while");
var e = 0;
do{
console.log(e);
} while( e <=10);

// Reto piedra papel o tijera

//alert("gana J1")

var j1 = prompt("introduce opción j1");
var j3 = prompt("introduce opción j2");

if(){
    console
}

console.log(3<5); // true
if(edad>=18){
console.log("Eres mayor de edad");
console.log("Puedes votar");
console.log("✨"); 
} else{
    console.log("No eres mayor de edad");
    console.log("No puedes votar");
    console.log("🙅🏽‍♀️");
}