import {Router} from 'express' // importamos el metodo Router de express, pero no como servidor, sino para crear un enrutador
import { register, login, logout, profile} from '../controllers/auth.controllers.js'
import { authRequired } from '../middlewares/validateToken.js'
import {validateSchema} from '../middlewares/validator.middleware.js'
import {registerSchema, loginSchema} from '../schemas/auth.schema.js'

const router= Router() //creamos un objeto de tipo router que nos va a permitir definir rutas (POST, GET, PUT, DELETE)

router.post('/register', validateSchema(registerSchema), register) // Cuando haga una peticion a /register, va a ejecutar la funcion register

router.post('/login', validateSchema(loginSchema), login) // Cuando haga peticion a /login, va a ejecutar la funcion login

router.post('/logout', logout)

router.get('/profile', authRequired, profile) // authRequired es un middleware que se ejecuta antes de profile

export default router // exportamos el router para poder usarlo en otros archivos