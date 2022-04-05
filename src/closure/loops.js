const anotherFunction = () => {
    for(let i=0; i<10; i++){
            //console.log(i)//0,1,2,3,4,5,6,7,8,9
        setTimeout(()=>{
            console.log(i)// muestra el último valor asignado
        },1000)
    }
}
anotherFunction();
//closure: manejo de accesos a valores privados o la asignación de métodos