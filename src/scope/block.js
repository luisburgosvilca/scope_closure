//ejemplo 1: se accede a todoas las variables
const fruits = () => {
    if(true){
        var fruit1 = "banana";
        var fruit2 = "apple";
        var fruit3 = "kiwi";
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}
fruits();

//ejemplo 2: se accede a todoas las variables
const fruits = () => {
    if(true){
        var fruit1 = "banana";
        let fruit2 = "apple";
        const fruit3 = "kiwi";
        console.log(fruit2);
        console.log(fruit3);
    }
    console.log(fruit1);
}
fruits();

//ejemplo 03: en este caso, son distintos valores para x
let x = 1;
{
    let x =  2
    console.log(x)
}
console.log(x)

//ejemplo 04: en este caso, el valor de X se sobreescribe
var x = 1;
{
    var x =  2
    console.log(x)
}
console.log(x)

//ejemplo: 05-> imprime el último valor 10 veces: 10
const anotherFunction = () => {

    for(var i=0; i<10; i++){
            console.log(i)//0,1,2,3,4,5,6,7,8,9
        setTimeout(()=>{
            console.log(i)// muestra el último valor asignado
        },1000)
    }
}
anotherFunction();

//ejemplo: 06-> imprime el valor actual en cada iteración: 0,1,2,3,4,5,6,7,8,9
const anotherFunction = () => {

    for(let i=0; i<10; i++){
        setTimeout(()=>{
            console.log(i)// vemos todas las iteraciones: 1,2,3,4,5,6,7,8,9
        },1000)
    }
}
anotherFunction();