const estudiantes =  require('../models/estudianteModel');

function updateEstudiante(req, res) {
    estudiantes.save(req.params.id, req.body.nombre, req.body.semestreI, req.body.creditosCursados).then((estudiantes) => {
        res.status(200).send('Actualización exitosa');
    }).catch(err => {
        res.status(400).send(err);
    });
}

function getAllEstudiantes(req, res) {
    if (req.query.matricula) {
        estudiantes.findByMatricula(req.query.matricula).then((estudiantes) => {
            res.status(200).json(estudiantes);
        }).catch(err => {
            res.status(400).send(estudiantes);
        });
    } else {
        estudiantes.findAll().then((estudiantes) => {
            res.status(200).json(estudiantes);
        }).catch(err => {
            res.status(400).send(err);
        });
    }
}

function getEstudianteId(req, res) {
    estudiantes.findById(req.params.id).then((estudiantes) => {
        res.status(200).json(estudiantes);
    }).catch(err => {
        res.status(400).send(err);
    });
}

function createEstudiante(req, res) {
    estudiantes.add(req.body.nombre, req.body.matricula, req.body.semestreIngreso, req.body.creditosCursados).then((estudiantes) => {
        res.status(200).send('Estudiante creado');
    }).catch(err => {
        res.status(400).send(err);
    });
}

function deleteEstudiante(req,res){
	estudiantes.delete(req.params.id).then((estudiantes)=>{
	res.status(200).send('Eliminación exitosa');	
	}).catch(err=>{
	res.status(400).send(err);	
	});
}

exports.getAllEstudiantes = getAllEstudiantes;
exports.getEstudianteId = getEstudianteId;
exports.createEstudiante = createEstudiante;
exports.updateEstudiante = updateEstudiante;
exports.deleteEstudiante = deleteEstudiante;