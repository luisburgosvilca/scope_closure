//Ejemplo 1
var hello = "hello";
console.log(hello);

//Ejemplo 2: Scope global
var hello = "hello";
let world = "World";
const helloWorld = "hello world";

const anotherFunction = () =>{
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}
anotherFunction();

//
const helloWorld2 = () => {
    globalVar = 'im global'; // esto es una mala práctica: asignar una variable local dentro de una función
}
helloWorld2();
console.log(globalVar);

//Ejemplo
const anotherFunction2 = () =>{
    var localVar = globalVar = 'Im Global';// mala práctica: declarar variable de alcance global dentro de un bloque
}
anotherFunction2();
console.log(globalVar);