import { Schema, model, Document } from 'mongoose';

const tipoSchema = new Schema({
    name: {
        type: String,
        unique: true,
        lowercase: true,
        required: [true, 'EL grupo es necesario']
    }
});

export default model('Group', tipoSchema);