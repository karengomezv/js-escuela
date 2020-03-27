const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'escuela',
    'root',
    'kgv123.',
    {
        host: 'localhost',
        dialect: 'mysql'
    });
const Estudiante = sequelize.define('estudiante', {
    nombre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    matricula: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
    },
    semestreIngreso: {
        type: Sequelize.STRING,
        allowNull: true
    },
    creditosCursados: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: 0
    }
});

const Curso = sequelize.define('curso',{
    nombre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    clave:{
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
    },
    creditos: {
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue:0
    }
});

const EstudianteCurso = sequelize.define('estudianteCurso');
Estudiante.belongsToMany(Curso, {
    through: EstudianteCurso
});
Curso.belongsToMany(Estudiante, {
    through: EstudianteCurso
});

exports.Estudiante = Estudiante;
exports.Curso = Curso;
exports.sequelize = sequelize;
exports.Sequelize = Sequelize;
exports.EstudianteCurso = EstudianteCurso;