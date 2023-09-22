import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';


export const authRequired = (req, res, next) => { // para ser un middleware, debe tener 3 parametros
    const { token } = req.cookies;

    if (!token) return res.status(401).json({ message: 'Unauthorized' })

    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        if (err) return res.status(401).json({ message: 'Invalid Token' })
        
        req.user = user //req.user es un objeto muestra las peticiones que van llegando y se guarda ahi por que las demas rutas tienen req

        next()
    })

}