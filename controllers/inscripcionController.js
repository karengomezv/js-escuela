const inscripcionModel = require('../models/inscripcionModel');
exports.createInscripcion = createInscripcion;

function createInscripcion(req, res) {
    let estudiante = req.params.id;
    inscripcionModel.inscripcion(estudiante, req.body).then((inscripcion) => {
        res.status(200).send('Inscripción exitosa');
    }).catch(err => {
        res.status(400).send('Error de inscripción');
    });
}
