const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripcion de tareas por hacer'
};
const completado = {
    alias: 'c',
    default: true,
    desc: 'marca como completado o pendiente la tarea'
};

const argv = require('yargs')
    .command('crear', 'crea una lista por hacer', { descripcion })
    .command('actualizar', 'actualiza la lista', { descripcion, completado })
    .command('borrar', 'elimina una tarea', { descripcion })
    .help()
    .argv;

module.exports = {
    argv
}