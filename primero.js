function promedio1(nota_uno, nota_dos, nota_tres) {
    let resultado=(nota_uno+nota_dos+nota_tres)/3;
    console.log("El promedio Uno es" + resultado)
}
let promedio2=(nota_uno, nota_dos, nota_tres)=>{
    setTimeout(function(){
    let resultado=(nota_uno+nota_dos+nota_tres)/3;
    console.log("El promedio dos es " + resultado);
}, 2000);
}
let promedio3=(nota_uno, nota_dos, nota_tres)=>{
    let resultado=(nota_uno+nota_dos+nota_tres)/3;
    console.log("El promedio tres es " + resultado);
}
promedio1 (12,4,5);
promedio2 (3,4,5);
promedio3 (3,4,5);