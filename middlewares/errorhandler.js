const errorhandler = (err, req, res, next) => {
    console.log("Manejo de errores desde un middleware");
    const defaultmensaje = 'La aplicación esta ocupada. Inténtelo nuevamente más tarde.'
    if (process.env.NODE_ENV === 'development') {
        const statuscode = err.statusCode || 500
        const message = err.message || defaultmensaje
        res.status(statuscode).json({
            success: false,
            status: statuscode,
            message: message,
            stack: err.stack
    })
    } else {I
        res.status(200).send(defaultmensaje)
    }
}
module.exports = errorhandler