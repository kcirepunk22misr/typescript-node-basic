import { Schema, model, Document } from 'mongoose';

const locationSchema = new Schema({
    container: {
        type: String,
        required: [true, 'EL contenedor es necesario']
    },
    place: {
        type: {
            type: String,
            required: [true, 'El lugar es necesario']
        }
    },
    quantify: {
        type: Number,
        required: [true, 'Cantidad requeridad']
    }
});

export default model('Location', locationSchema);