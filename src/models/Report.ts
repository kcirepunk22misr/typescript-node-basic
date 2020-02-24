import { Schema, model, Document } from 'mongoose';
import { format } from 'fecha';

const reportSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'El ID del usuario es necesario']
    },
    inventoryId: {
        type: Schema.Types.ObjectId,
        ref: 'Inventory',
        required: [true, 'El ID del inventario es necesario']
    },
    description: {
        type: String,
        required: [true, 'La descripcion es necesario']
    },
    createdAt: {
        type: Date,
        required: true,
        default: format(new Date(), 'YYYY MM DD hh:mm:ssa')
    }
});

export default model('Report', reportSchema);