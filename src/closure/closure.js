//alcancia: ejemplo con var
const moneyBox = (coins) =>{
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`Ahorros: $${saveCoins}`);
}
moneyBox(5);
moneyBox(10);
//Closure: una función y el ámbito léxico donde fue declarado

//Con closure
const moneyBox = (coins) =>{
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`Ahorros: $${saveCoins}`);
    }
    return countCoins;
}
// moneyBox(5);  // no instancia nada
// moneyBox(10); // no instancia nada
let myMoneyBox = moneyBox();//declaración de Closure
myMoneyBox(4);//  4: es el primer llamado
myMoneyBox(6);// 10: el segundo llamado recuerda la asignación del valor anterior
myMoneyBox(10);//20: el tercer llamado recuerda la asignación del valor anterior

//ejemplo de los comentarios:
const papa = (nuevoEngendro) =>{
    var cantidadDeHijos = 0;
    const crearEngendro = (nuevoEngendro) =>{
        cantidadDeHijos += nuevoEngendro;
        console.log(`cantidad de engendritos = ${cantidadDeHijos}`)
    }
    return crearEngendro;
}

let traigamosHijosAlMundo = papa();
traigamosHijosAlMundo(1)  // cantidad de engendritos = 1
traigamosHijosAlMundo(2)  // cantidad de engendritos = 3
traigamosHijosAlMundo(3)  // cantidad de engendritos = 6

//ejemplo de los comentarios:
const papa = () =>{
    var cantidadDeHijos = 0;
    const crearEngendro = (nuevoEngendro) =>{
        cantidadDeHijos += nuevoEngendro;
        console.log(`cantidad de engendritos = ${cantidadDeHijos}`)
    }
    return crearEngendro;
}

let traigamosHijosAlMundo = papa();
traigamosHijosAlMundo(1)  // cantidad de engendritos = 1
traigamosHijosAlMundo(2)  // cantidad de engendritos = 3
traigamosHijosAlMundo(3)  // cantidad de engendritos = 6

// Ejemplo: simplificado encontrado en los comentarios
var saveCoins = 0;
const moneyBox = (coins) => {
    saveCoins += coins;
    console.log(saveCoins);
}
moneyBox(5); //5
moneyBox(10); //15

// otro ejemplo encontrado en los comentarios acerca del ejemplo del profesor:
const moneyBox = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(saveCoins);
    }
    return countCoins;
}
let myMoneyBox = moneyBox()
myMoneyBox(4) //4
myMoneyBox(10)//14
myMoneyBox(6)//20

//otro ejemplo de Internet: video de "Sacha: https://www.youtube.com/watch?v=JXG_gQ0OF74"
function crearContador(){
    let contador = 0;

    setTimeout(function(){
        contador = 100
    },5000);

    return function incrementar(){
        contador = contador + 1; 
        return contador;
    }
}
const contador1 = crearContador();
contador1();

//ejemplo 2 de Sacha
function crearContador(){
    let contador = 0;

    return function incrementar(){
        contador = contador + 1;
        return contador;
    };
}
const contador1 = crearContador();
contador1();
contador1();
contador1();

const contador2 = crearContador();
contador2();
contador2();
contador2();
contador2();

//ejemplo 3 de sacha
function crearContador(){
    let contador = 0;
    return {
        incrementar: function(){
            contador = contador + 1;
            return contador;
        },
        decrementar: function(){
            contador = contador - 1;
            return contador;
        },
        obtenerValorActual: function(){
            return contador;
        }
    }
}

const contador1 = crearContador();
contador1.incrementar();
contador1.incrementar();
contador1.decrementar();
contador1.obtenerValorActual();

//una variante del ejemplo anterior
function crearContador(contador = 0){
    return {
        incrementar : function(){
            contador = contador + 1;
            return contador;
        },
        decrementar : function(){
            contador = contador - 1;
            return contador;
        },
        obtenerValorActual : function(){
            return contador;
        },
        actualizarValor: function(numero){
            contador = numero;
            return contador;
        }
    }
}

const contador1 = crearContador(10);
contador1.obtenerValorActual();//10
contador1.actualizarValor(15);//15


//Ejercicio más avanzado
function crearImpresoraDeMensajes(tipo, estilos){
	return function mensaje(str){
			console.log(`%c ${tipo}: ${str} `, `${estilos}`);
	}
}
const mensajeError = crearImpresoraDeMensajes('Error','background: red; color: white;');
const mensajeWarning = crearImpresoraDeMensajes('Warning','background: orange; color: white;');
const mensajeSuccess = crearImpresoraDeMensajes('Success','background: green; color: white;');
mensajeError('Usuaurio no registrado');
mensajeWarning('Usuaurio no tiene correo');
mensajeSuccess('Usuaurio registrado');

// function error(str){
// 	console.log(`%c Error: ${str} `, 'background: red; color: white;');
// }
// function warning(str){
// 	console.log(`%c Warning: ${str} `, 'background: orange; color: white;');
// }
// function success(str){
// 	console.log(`%c Éxito: ${str} `, 'background: green; color: white;');
// }


//Ejemplo encontrado en los comentarios
const pocket = (money) => {
    let cash = money;
    return {
        deposit: (money) => {
            cash += money;
            console.log(`Depositing: ${money} Balance: ${cash}`);
        },
        withdrawal: (money) => {
            if(money<=cash){
                cash -= money;
                console.log(`Withdrawal: ${money} Balance: ${cash}`);
            }
            else{
                console.log(`The transaction cannot be made`);
            }
        }
    }
}
const myPocket = pocket(2000);
myPocket.deposit(500);
myPocket.withdrawal(1000);
myPocket.deposit(20);
myPocket.withdrawal(5000);