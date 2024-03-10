const pool = require('../data/datacontext')
const list = async function () {
    // El pool se inicializó en data/db.js
    // La conexión se cierra automáticamente cuando el query se resuelve
    const [rows, fields] = await pool.query(
        `SELECT alumno.id, alumno.nombre, alumno.promedio, materia.nombre AS materia_nombre
        FROM materia INNER JOIN alumno ON materia.id=alumno.id_materia`);
    // Regresa las filas
    return rows;
}
module.exports = { list }