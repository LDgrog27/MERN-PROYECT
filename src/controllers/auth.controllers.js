import User from '../models/user.models.js'; // importamos el modelo de usuario
import bcrypt from 'bcryptjs'; // importamos bcryptjs para encriptar la contraseña
import { createAccesToken } from '../libs/jwt.js'



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

        res.cookie('token', token); // Cookie es propio de express para una respuesta
        res.json({
            id: userSaved._id,
            username: userSaved.username,  // DATOS ENVIADOS AL FRONTEND
            email: userSaved.email,
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

export const login = async (req, res) => {
    const { email, password } = req.body

    try {

        const userFound = await User.findOne({ email }); // Buscamos el usuario por el email
        if (!userFound) return res.status(400).json({ message: 'User not found' }); // Si no existe el usuario, retornamos un mensaje de error
        
        const isMatch = await bcrypt.compare(password, userFound.password) // usamos bcrypt para comparar la contraseña ingresada

        if (!isMatch) return res.status(400).json({ message: 'Incorrect password' }); // Si la contraseña es incorrecta, retornamos un mensaje de error


        const token = await createAccesToken({ id: userFound._id }); // Cambio usuario guardado por usuario encontrado
        res.cookie('token', token); // Cookie es propio de express para una respuesta
        res.json({
            id: userFound._id,
            username: userFound.username,  // DATOS ENVIADOS AL FRONTEND
            email: userFound.email,
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};

export const logout = (req, res) => { // Cookie queda basio y expira
    res.cookie('token', '', { 
        expires: new Date(0) // Fecha de expiracion
     }); 
     return res.sendStatus(200)
}







//{res.send('Register')} TESTEO
//{res.send('Login')}

// User.create({
//     username,
//     email,            Una forma de hacerlo
//     password
//  })
