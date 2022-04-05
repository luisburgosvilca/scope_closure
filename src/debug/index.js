var a = "Hello";
function hello(){
    let b = "Hello World";
    const c = "Hello World !";
    if(true){
        let d = "Hello World !!!";
        debugger;
    }
}
hello();

//Ejemplo 2
const pocket = (money) => {
    debugger
    let cash = money;
    return {
        deposit: (money) => {
            debugger
            cash += money;
            console.log(`Depositing: ${money} Balance: ${cash}`);
        },
        withdrawal: (money) => {
            if(money<=cash){
                debugger
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