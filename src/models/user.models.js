import mongoose from "mongoose";

const userSchema = new mongoose.Schema ({ // creamos un esquema de usuario haciendo un objeto con NEW
    username: {
        type: String,
        required: true,
        trim: true, // trim lo que hace es quitar los espacios en blanco
    },
    email: {
        type: String,
        required: true,
        trim: true, // trim lo que hace es quitar los espacios en blanco
        unique: true, // unique lo que hace es que no se repita el email a la hora de registrarlo
    },
    password: {
        type: String,
        required: true,
    }
}, {
    timestamps: true, // timestamps es un metodo de mongoose que nos permite ver la fecha de creacion y modificacion de un usuario
})
export default mongoose.model('User', userSchema) // exportamos el modelo de usuario

// model es un metodo de mongoose que nos permite crear un modelo de datos llamado "User" guardandolo como objeto alli mismo
// Con este esquema, nosotros le decimos a MongoDB que cuando guarde, debe lucir de esta manera: linea 3 a 19