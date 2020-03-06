import { Schema, model, Document } from 'mongoose';

const SizeSchema = new Schema({
    name: {
        type: String,
        unique: true,
        lowercase: true,
        required: [true, 'EL tamaño es necesario']
    },
});

export default model('Size', SizeSchema);