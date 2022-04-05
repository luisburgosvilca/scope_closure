const fruits = () =>{
    var fruit = 'apple';
    console.log(fruit);
}
fruits();//output: apple
console.log(fruit);// fruit no defined

//Ejemplo 2
const anotherFunction = () => {
    var x = 1;
    var x = 2;
    //let y = 1;
    //let y = 2;// las variables con let, no se pueden reasignar
    console.log(x);
    //console.log(y);
}
anotherFunction();

