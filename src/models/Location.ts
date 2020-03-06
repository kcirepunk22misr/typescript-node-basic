import { Schema, model, Document } from 'mongoose';

const locationSchema = new Schema({
    container: {
        type: String,
        required: [true, 'EL contenedor es necesario']
    },
    lote: {
        type: String,
        required: [true, 'Es necesario la ubicacion']
    },
    place: {
        type: String,
        required: [true, 'Es necesario la columna']
    }
});

export default model('Location', locationSchema);