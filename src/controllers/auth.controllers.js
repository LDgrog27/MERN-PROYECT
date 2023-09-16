import User from '../models/user.models.js'; // importamos el modelo de usuario
import bcrypt from 'bcryptjs'; // importamos bcryptjs para encriptar la contraseña
import jws from 'jsonwebtoken'; // importamos jsonwebtoken para crear un token de usuario

export const register = async (req, res) => {
    const { email, password, username } = req.body

    try {

        const passwordHash = await bcrypt.hash(password, 10) // usamos bcrypt para encriptar la contraseña, el 10 es el numero de veces que se encripta

        const newUser = new User({ // usamos new para crear un nuevo objeto/usuario que pueda ser modificado
            username,
            email,
            password: passwordHash // guardamos la contraseña encriptada
        });

        const userSaved = await newUser.save() // save es un metodo de mongoose que nos permite guardar en la base de datos
        // Es asincrono, por lo que debemos usar await
        
        jwt.sing() // sing es un metodo de jsonwebtoken que nos permite crear un token de usuario

        res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
        })

    } catch (error) {
        console.log(error)
    }










}


export const login = (req, res) => { res.send('Login') }







//{res.send('Register')} TESTEO
//{res.send('Login')}

// User.create({
//     username,
//     email,            Una forma de hacerlo
//     password
//  })
