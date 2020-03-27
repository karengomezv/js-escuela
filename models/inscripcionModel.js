const db = require('../models/database/db');
exports.inscripcion = inscripcion;

async function inscripcion(indentificacion, cursos){
let estudiante = await db.Estudiante.findAll({
    where:{
        id: indentificacion
    }
});

for(let x=0;x<cursos.length;x++){
    estudiante[0].setCursos(cursos[x].id);
}
return estudiante;
}
