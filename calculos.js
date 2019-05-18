let estudiante = {
    nombre: "Juan",
    edad:  25,
    notas: {
        matematicas: 3,
        ingles: 4,
        programacion: 5
    }
};
let obtenerPromedio = (nota_uno, nota_dos, nota_tres)=> (nota_uno+nota_dos+nota_tres)/3

/* Línea para obtener el promedio de las notas. Esta será reemplazada por la exportación MODULE
console.log(obtenerPromedio(estudiante.notas.matematicas,estudiante.notas.ingles,estudiante.notas.programacion));
*/

// Exportar el objeto estudiante.
module.exports = {
    estudiante,
    obtenerPromedio
};
