const cursos = require('../models/cursoModel');

function getAllCursos(req, res) {
    if (req.query.clave) {
        cursos.findByClave(req.query.clave).then((cursos) => {
            res.status(200).json(cursos);
        }).catch(err => {
            res.status(400).json(err);
        });
    } else {
        cursos.findAll().then((cursos) => {
            res.status(200).json(cursos);
        }).catch(err => {
            res.status(400).send(err);
        });
    }
}

function getCursoId(req, res) {
    cursos.findById(req.params.id).then((cursos) => {
        res.status(200).json(cursos);
    }).catch(err => {
        res.status(400).send(err);
    });
}

function createCurso(req, res) {
    cursos.add(req.body.clave, req.body.nombre, req.body.creditos).then((cursos) => {
        res.status(200).send('Curso creado');
    }).catch(err => {
        res.status(400).send(err);
    });
}
function updateCurso(req, res) {
    cursos.save(req.body.nombre, req.body.clave, req.body.creditos, req.params.id).then((cursos) => {
        res.status(200).send('Actualización exitosa');
    }).catch(err => {
        res.status(400).send(err);
    });
}

function deleteCurso(req, res) {
    cursos.delete(req.params.id).then((cursos) => {
        res.status(200).send('Eliminación exitosa');
    }).catch(err => {
        res.status(400).send(err)
    });
}

exports.getAllCursos = getAllCursos;
exports.getCursoId = getCursoId;
exports.createCurso = createCurso;
exports.updateCurso = updateCurso;
exports.deleteCurso = deleteCurso;
