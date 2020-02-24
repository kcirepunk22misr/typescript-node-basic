import { Schema, model, Document } from 'mongoose';
import { format } from 'fecha';


const userSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'El nombre es requerido'],
        lowercase: true
    },
    lastName: {
        type: String,
        required: [true, 'El Apellido es necesario'],
        lowercase: true
    },
    sex: {
        type: String,
        required: [true, 'El sexo es necesario'],
        lowercase: true
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'El correo es necesario'],
        lowercase: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es necesaria'],
        lowercase: true
    },
    role: {
        type: String,
        required: true,
        default: 'ROLE_USER',
        uppercase: true
    },
    img: {
        type: String,
        required: false,
        lowercase: true
    },
    createdAt: {
        type: String,
        required: true,
        default: format(new Date(), 'YYYY MM DD hh:mm:ssa')
    },
    active: {
        type: Boolean,
        default: true
    }
});

export default model('User', userSchema);