import { Router } from 'express';
import  authenticationController from '../controllers/authentication';
import authMiddleware from '../middlewares/auth';

const router = Router();

// add the paths for register, login, me, and logout here
router.post('/register', authenticationController.create);
router.post('/login', authenticationController.login);
router.get('/profile', authMiddleware, authenticationController.profile);
router.get('/logout', authMiddleware, authenticationController.logout);

export default router;
