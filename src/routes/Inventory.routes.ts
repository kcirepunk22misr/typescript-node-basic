import { Router } from 'express';
import { inventoryController } from '../controllers/Inventory.controller';

const router = Router();

router.get('/invenraio', inventoryController.saveTool);
router.post('add-inventory', );


export default router;