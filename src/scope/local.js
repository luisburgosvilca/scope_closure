const helloWorld = () => {
    const hello = "hello World";
    console.log(hello);
}
//console.log(hello);//esto no funciona, porque no existe de manera global
helloWorld();//en este caso, se llama a la function, y como dentro sí está declarado, sí muestra resultado

console.log(hello);//no está dentro del alcance (scope)

//Ejemplo 2
var scope = "I am global";
const functionScope = () =>{
    var scope = "i am just local";
    const func = () => {
        return scope;
    }
    console.log(func());
}
functionScope();//ambito lexico: asignación sobre la que trabaja
//output: i am just local

//otro ejemplo:
const scope = "I'm global";
const func1 = () => {
  const scope = "I'm local 1";
  const func2 = () => {
    const scope = "I'm local 2";
    const func3 = () => {
      const scope = "I'm local 3";
      console.log(scope);
    }
    func3();
  }
  func2();
}
func1();

var = "hola";