import { Schema, model, Document } from 'mongoose';
import { format } from 'fecha';

const inventorySchema = new Schema({
    name: {
        type: String,
        required: [true, 'EL nombre es necesario'],
        lowercase: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: format(new Date(), 'YYYY MM DD hh:mm:ssa')
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'El id del usuario es necesario']
    },
    marcaId: {
        type: Schema.Types.ObjectId,
        ref: 'Marca',
        required: [true, 'El ID de la marca es necesario']
    },
    typeId: {
        type: Schema.Types.ObjectId,
        ref: 'Tipo',
        required: [true, 'El ID del tipo es necesario']
    },
    groupId: {
        type: Schema.Types.ObjectId,
        ref: 'Grupo',
        required: [true, 'EL ID del grupo es necesario']
    },
    locationId: {
        type: Schema.Types.ObjectId,
        ref: 'Location',
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