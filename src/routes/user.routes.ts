import { Router } from 'express';
import { userController } from '../controllers/User.controller';

const router = Router();

router.get('/users', userController.getUsers);
router.post('/add-user', userController.saveUser);

export default router;