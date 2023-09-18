import User from '../models/user.models.js'; // importamos el modelo de usuario
import bcrypt from 'bcryptjs'; // importamos bcryptjs para encriptar la contraseña
import {createAccesToken} from '../libs/jwt.js'



export const register = async (req, res) => {
    const { email, password, username } = req.body

    try {

        const passwordHash = await bcrypt.hash(password, 10) // usamos bcrypt para encriptar la contraseña, el 10 es el numero de veces que se encripta

        const newUser = new User({ // usamos new para crear un nuevo objeto/usuario que pueda ser modificado
            username,
            email,
            password: passwordHash // guardamos la contraseña encriptada
        });

        const userSaved = await newUser.save(); // save es un metodo de mongoose que nos permite guardar en la base de datos
            // Es asincrono, por lo que debemos usar await
        const token = await createAccesToken({ id: userSaved._id }); // usamos el metodo createAccesToken para crear un token de usuario
        
        res.cookie( 'token', token); // Cookie es propio de express para una respuesta
        res.json({
             id: userSaved._id,
             username: userSaved.username,  // DATOS ENVIADOS AL FRONTEND
             email: userSaved.email,
        });
       
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};


export const login = (req, res) => { res.send('Login') }







//{res.send('Register')} TESTEO
//{res.send('Login')}

// User.create({
//     username,
//     email,            Una forma de hacerlo
//     password
//  })
