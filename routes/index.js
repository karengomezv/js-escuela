const express = require('express');
const router = express.Router();
const estudiantesController = require('../controllers/estudiantesControllers');
const cursoController = require('../controllers/cursoControllers');
const inscripcionController = require('../controllers/inscripcionController');

router.use(express.json());
router.get('/estudiantes',estudiantesController.getAllEstudiantes);
router.get('/estudiantes/:id',estudiantesController.getEstudianteId);
router.post('/estudiantes',estudiantesController.createEstudiante);
router.put('/estudiantes/:id',estudiantesController.updateEstudiante);
router.delete('/estudiantes/:id',estudiantesController.deleteEstudiante)


router.get('/cursos',cursoController.getAllCursos);
router.get('/cursos/:id',cursoController.getCursoId);
router.post('/cursos',cursoController.createCurso);
router.put('/cursos/:id',cursoController.updateCurso);
router.delete('cursos/:id',cursoController.deleteCurso);

router.post('/inscripcion/:id',inscripcionController.createInscripcion);

module.exports = router;