import { Schema, model, Document } from 'mongoose';
import { format } from 'fecha';

const inventorySchema = new Schema({
    name: {
        type: String,
        required: [true, 'EL nombre es necesario'],
        lowercase: true
    },
    createdAt: {
        type: String,
        required: true,
        default: format(new Date(), 'YYYY MM DD hh:mm:ssa')
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        default: '5e53d8777f40ae158784046f',
        required: [true, 'El id del usuario es necesario']
    },
    marca: {
        type: String,
        required: [true, 'El ID de la marca es necesario']
    },
    type: {
        type: String,
        required: [true, 'El ID del tipo es necesario']
    },
    group: {
        type: String,
        required: [true, 'EL ID del grupo es necesario']
    },
    size: {
        type: String,
        required: [true, 'El tamaño es necesario']
    },
    color: {
        type: String,
        required: [true, 'El color es necesario']
    },
    location: {
        type: String,
        required: [true, 'El ID de la ubicacion es necesario']
    },
    state: {
        type: String,
        required: [true, 'El estado de la herramienta es necesario']
    },
    quantify: {
        type: Number,
        required: [true, 'La cantidad es requeridad']
    },
    img: {
        type: String,
        required: false
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    }
});

export default model('Inventory', inventorySchema);