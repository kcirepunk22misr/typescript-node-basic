import { Router } from 'express';
import { propertiesController } from '../controllers/Properties.controller';

const router = Router();

// Tipos Routes
router.get('/types', propertiesController.getTypes);
router.post('/add-type', propertiesController.saveType);

// Grupos Routes
router.get('/groups', propertiesController.getGroup);
router.post('/add-group', propertiesController.saveGroup);

// Marcas Routes
router.get('/marcas', propertiesController.getMarcas);
router.post('/add-marca', propertiesController.saveMarca)

export default router;