import { Schema, model, Document } from 'mongoose';

const tipoSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: [true, 'La marca es necesario']
    }
});

export default model('Marca', tipoSchema);