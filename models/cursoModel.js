const db = require('../models/database/db');

exports.findAll = async function () { 
    let course = await db.Curso.findAll();
    let arregloEstudiantes = [], impresion = [];
    for (let x = 0; x < course.length; x++) {
        arregloEstudiantes[x] = await inscritosId(course[x].id);
    }
    for (let j = 0; j < arregloEstudiantes.length; j++) {
        for (let i = 0; i < arregloEstudiantes[j].length; i++) {
            arregloEstudiantes[j][i] = 'http://localhost:4000/estudiantes/' + arregloEstudiantes[j][i].id;
        }
    }
    for (let a = 0; a < course.length; a++) {
        impresion[a] = {
            "id": course[a].id,
            "nombre": course[a].nombre,
            "matricula": course[a].matricula,
            "semestreIngreso": course[a].semestreIngreso,
            "creditosCursados": course[a].creditosCursados,
            "cursos": arregloEstudiantes
        };
    }
    return impresion;
}

exports.findById = async function (value) {
    let arregloInscritos, impresion;
    let course = await db.Curso.findAll({
        where: {
            id: value
        }
    });
    arregloInscritos = await inscritosId(course[0].id);
    for (let x = 0; x < arregloInscritos.length; x++) {
        arregloInscritos[x] = 'http://localhost:4000/cursos/' + arregloInscritos[x].id;
    }
    impresion = {
        "id": course[0].id,
        "nombre": course[0].nombre,
        "clave": course[0].clave,
        "creditos": course[0].creditos,
        "cursos": arregloInscritos
    };
    return impresion;
}

inscritosId = async function (value) {
    let course = await db.Curso.findAll({
        where: {
            id: value
        }
    }); 
    return course[0].getEstudiantes(); 
}

exports.findByClave = async function (key) {
    let arregloInscritos, impresion;
    let course = await db.Curso.findAll({
        where: {
            clave: key
        }
    });
    arregloInscritos = await inscritosId(course[0].id);
    for (let x = 0; x < arregloInscritos.length; x++) {
        arregloInscritos[x] = 'http://localhost:4000/cursos/' + arregloInscritos[x].id;
    }
    impresion = {
        "id": course[0].id,
        "nombre": course[0].nombre,
        "clave": course[0].clave,
        "creditos": course[0].creditos,
        "cursos": arregloInscritos
    };
    return impresion;
}


exports.add = async function (key, name, credits) { 
    let course = await db.Curso.create({
        clave: key,
        nombre: name,
        creditos: credits
    });
    return course;
}

exports.save = async function (name, key, credits, identificador) {
    let course = await db.Curso.update({
        nombre: name,
        clave: key,
        creditos: credits
    }, {
        where: {
            id: identificador
        }
    });
    return course;
}

exports.delete = async function (value) {
    let course = await db.Curso.destroy({
        where: {
            id: value
        }
    });
    return course;
}
