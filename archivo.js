const opciones = {
    matematicas:{
        default: 0,
        alias: 'm'
    },
    ingles:{
        default:0,
        alias:'i'
    },
    programacion:{ 
        demand: true,
        alias: 'p'
    }
}

const argv = require('yargs')
        .command ('Promedio', 'Calcular promedio',opciones);
        .argv

console.log('La nota de matemáticas es ' + argv.matematicas);
//console.log('(L1)El nombre del estudiante es ' + argv.nombre);
console.log(argv);

//VOY EN EL MINUTO 6:15 del video 10 - Require Externo (yargs)