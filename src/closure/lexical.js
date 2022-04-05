const builtCount = (i) => {
    let count = i;
    const displayCount = () => {
        console.log(count++ );
    };
    return displayCount;
};

const miContador = builtCount(50);
miContador();
miContador();
miContador();

const miOtroContador = builtCount(10);
miOtroContador();
miOtroContador();
miOtroContador();