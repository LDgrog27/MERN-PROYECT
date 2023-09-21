


export const authRequired = (req, res, next) => { // para ser un middleware, debe tener 3 parametros
    
    
   // const cookies = req.cookies;
    console.log(req.headers)

    next()
}