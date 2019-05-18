const {obtenerPromedio, argv} = require ('./datos')

console.log(argv);
if (argv._[0]=='promedio'){
    console.log('El promedio es ' + argv.n);
}
else{
    console.log('Promedio no calculado');
}