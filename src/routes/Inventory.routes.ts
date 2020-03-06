import { Router } from 'express';
import { inventoryController } from '../controllers/Inventory.controller';
import multer from '../lib/multer';

const router = Router();

router.get('/inventorys',inventoryController.getInventarios);
router.get('/image/:img', inventoryController.getImage);
router.post('/add-inventory', inventoryController.saveTool);

router.put('/image-upload/:id', multer.single('image'),inventoryController.uploadImage)

// router.post('/upload/:tipo/:id', inventoryController.uploadImage);

export default router;