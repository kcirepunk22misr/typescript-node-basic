import { Schema, model, Document } from 'mongoose';

const ColorSchema = new Schema({
    name: {
        type: String,
        unique: true,
        lowercase: true,
        required: [true, 'EL color es necesario']
    },
});

export default model('Color', ColorSchema);