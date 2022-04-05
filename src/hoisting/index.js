//levantamiento de las declaraciones
a = 2;
var a;
console.log(a);//output: 2
//lo que sucede es que hoisting: eleva las declaraciones
//1 elevación
//2 asignación

a = 2;
let a;
console.log(a);//output: a=2  ^ error cannot access 'a' before initialization

//otro ejemplo
function nameOfDog(name){
    console.log(name);
}
nameOfDog("Elmo");

//ejemplo 2
nameOfDog("Elmo");
function nameOfDog(name){
    console.log(name);
}