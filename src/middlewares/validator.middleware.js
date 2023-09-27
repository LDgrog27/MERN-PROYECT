

export const validateSchema = (schema) => (req, res, next) => {
    
    try {
        schema.parse(req.body); // parsea el body con el schema que se le pasa por parametro
        next()
    } catch (error) {
        return res.status(400).json({error: error.errors.map(error => error.message )}); //para que no tumbe el sistema xd
    } // A traves de map, recorremos el array de errores y retornamos el mensaje de cada error
}