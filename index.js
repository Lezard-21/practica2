const express = require('express')
const dotenv = require('dotenv');
const app = express()

// Carga la configuración del archivo .env
dotenv.config();
// Establece el motor de vistas a ejs
app.set ('view engine', 'ejs')
// Rutas
const homeRouter = require('./routes/home.js')
app.use("/", homeRouter)
app.use('/home', homeRouter)
// Middleware para el manejo de errores (Debe ser el último middleware a utilizar)
const errorhandler = require('./middlewares/errorhandler')
app.use(errorhandler)

// Inicia el servidor web en el puerto SERVER_ PORT
app. listen(process.env.SERVER_PORT, () => {
console. log(`Aplicación de ejemplo escuchando en el puerto $(process.env.SERVER_PORT}`)
})