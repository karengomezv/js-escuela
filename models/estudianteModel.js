const db = require('../models/database/db');

exports.findAll = async function () { 
   let student = await db.Estudiante.findAll();
   let arregloCursos = [], impresion = [];
   for (let x = 0; x < student.length; x++) {
      arregloCursos[x] = await mostrarCursos(student[x].id);
   }
   for (let j = 0; j < arregloCursos.length; j++) {
      for (let i = 0; i < arregloCursos[j].length; i++) {
         arregloCursos[j][i] = 'http://localhost:4000/cursos/' + arregloCursos[j][i].id;
      }
   }
   for (let a = 0; a < student.length; a++) {
      impresion[a] = {
         "id": student[a].id,
         "nombre": student[a].nombre,
         "matricula": student[a].matricula,
         "semestreIngreso": student[a].semestreIngreso,
         "creditosCursados": student[a].creditosCursados,
         "cursos": arregloCursos
      };
   }
   return impresion;
}


exports.findById = async function (value) {
   let inscritos, impresion;
   let student = await db.Estudiante.findAll({
      where: {
         id: value
      }
   });
   inscritos = await mostrarCursos(student[0].id);
   for (let x = 0; x < inscritos.length; x++) {
      inscritos[x] = 'http://localhost:4000/cursos/' + inscritos[x].id;
   }
   impresion = {
      "id": student[0].id,
      "nombre": student[0].nombre,
      "matricula": student[0].matricula,
      "semestreIngreso": student[0].semestreIngreso,
      "creditosCursados": student[0].creditosCursados,
      "cursos": inscritos
   };
   return impresion;
}

mostrarCursos = async function (value) {
   let student = await db.Estudiante.findAll({ 
      where: {
         id: value
      }
   });
   return student[0].getCursos(); 
}

exports.findByMatricula = async function (mat) {
   let inscritos, impresion;
   let student = await db.Estudiante.findAll({
      where: {
         matricula: mat
      }
   });
   inscritos = await mostrarCursos(student[0].id);
   for (let x = 0; x < inscritos.length; x++) {
      inscritos[x] = 'http://localhost:4000/cursos/' + inscritos[x].id;
   }
   impresion = {
      "id": student[0].id,
      "nombre": student[0].nombre,
      "matricula": student[0].matricula,
      "semestreIngreso": student[0].semestreIngreso,
      "creditosCursados": student[0].creditosCursados,
      "cursos": inscritos
   };
   return impresion;
}

exports.add = async function (name, mat, semestreI, creditos) { 
   let student = await db.Estudiante.create({
      nombre: name,
      matricula: mat,
      semestreIngreso: semestreI,
      creditosCursados: creditos
   });
   return student;
}

exports.save = async function (identificador, name, semestreI, creditos) {
   let student = await db.Estudiante.update({
      nombre: name,
      semestreIngreso: semestreI,
      creditosCursados: creditos
   }, {
      where: {
         id: identificador
      }
   });

   return student;
}

exports.delete = async function (value) {
   let student = await db.Estudiante.destroy({
      where: {
         id: value
      }
   });
   return student;
}