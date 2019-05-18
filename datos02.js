
const {estudiante, obtenerPromedio} = require('./calculos');
const fs = require('fs');

console.log('El nombre del estudiante es '+ estudiante.nombre);
console.log('El promedio es ' + obtenerPromedio (estudiante.notas.ingles, estudiante.notas.matematicas, estudiante.notas.programacion));
console.log('La edad del estudiante es ' + estudiante.edad);


/*SACA ERROR EL  SIGUIENTE "DESTRUCTURACIÓN"
let {nombre, edad : anos, notas: {matematicas, ingles, programacion}}=>estudiante
console.log('EL NOMBRE DEL ESTUDIANTE ES' + nombre);
console.log('El promedio es ' + obtenerPromedio (ingles, matematicas, programacion));
console.log('La edad del estudiante es ' + anos);
*/

let crearArchivo = (estudiante) =>{
    texto = 'El nombre del estudiante es ' + estudiante.nombre + '\n' +
    ' ha obtenido un promedio de ' + obtenerPromedio(estudiante.notas.ingles, estudiante.notas.matematicas, estudiante.notas.programacion);
    fs.writeFile('promedio.txt', texto, (err) => {
        if (err) throw (err);
        console.log('Se ha creado el archivo con éxito')
    })
}

crearArchivo (estudiante);