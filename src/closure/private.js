const person = () => {
    var saveName = "Name";
    return {
        getName: () => {
            return saveName
        },
        setName: (nombre) => {
            saveName = nombre;
        },
    }
}

newPerson = person();
console.log(newPerson.getName());
newPerson.setName("Luis");
console.log(newPerson.getName());