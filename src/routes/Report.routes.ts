import { Router } from 'express';
import { reportController } from '../controllers/Report.controller';

const router = Router();

router.get('/reports', reportController.getReport);
router.post('/add-report', reportController.saveReport);
router.put('/update-report', reportController.updateState);

export default router;