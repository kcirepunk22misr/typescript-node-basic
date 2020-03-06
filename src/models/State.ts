import { Schema, model, Document } from 'mongoose';

const stateSchema = new Schema({
    name: {
        type: String,
        required: [true, 'El estado es necesario']
    }
});

export default model('State', stateSchema);