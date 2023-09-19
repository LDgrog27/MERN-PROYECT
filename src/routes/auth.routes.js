import {Router} from 'express' // importamos el metodo Router de express, pero no como servidor, sino para crear un enrutador
import { register, login, logout } from '../controllers/auth.controllers.js'


const router= Router() //creamos un objeto de tipo router que nos va a permitir definir rutas (POST, GET, PUT, DELETE)

router.post('/register', register) // Cuando haga una peticion a /register, va a ejecutar la funcion register

router.post('/login', login) // Cuando haga peticion a /login, va a ejecutar la funcion login

router.post('/logout', logout)

export default router // exportamos el router para poder usarlo en otros archivos