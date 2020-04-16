const fs = require('fs');

let ListadoPorHacer = [];

const guardaDB = () => {
    let data = JSON.stringify(ListadoPorHacer);
    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('No se a almacenado la dara', err);
    });
}
const cargaDB = () => {
        try {
            ListadoPorHacer = require('../db/data.json');
            // console.log(ListadoPorHacer);
        } catch (error) {
            ListadoPorHacer = [];
        }

    }
    //crea tareas
const crear = (descripcion) => {
        cargaDB();
        let porHacer = {
            descripcion,
            completado: false
        };

        ListadoPorHacer.push(porHacer);
        guardaDB();
        return porHacer;
    }
    //carga la lista
const getListado = () => {
    cargaDB();
    return ListadoPorHacer;
}

//actualiza tareas
const actualizar = (descripcion, completado = true) => {
    cargaDB();

    let index = ListadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        ListadoPorHacer[index].completado = completado;
        guardaDB();
        return true;
    } else {
        return false;
    }

}
const borrar = (descripcion) => {
    cargaDB()
    let nuevoListado = ListadoPorHacer.filter(tarea => {
        return tarea.descripcion !== descripcion
    });
    if (ListadoPorHacer.length === nuevoListado.length) {

        return false;
    } else {
        ListadoPorHacer = nuevoListado;
        guardaDB();
        return true;
    }
}
module.exports = {
    crear,
    getListado,
    actualizar,
    borrar

}