import { Router } from 'express';
import  authenticationController from '../controllers/authentication';
import userInfoController from '../controllers/userInfo';
import addPlantController from '../controllers/plants'
import getAallPlantController from '../controllers/plants'
import getPlantByIdController from '../controllers/plants'
import searchPlantByNameController from '../controllers/plants'
import createPlantByUserController from '../controllers/plantByUser'
import plantByUserId from '../controllers/plantByUser';
import authMiddleware from '../middlewares/auth';

const router = Router();

// add the paths for register, login, me, and logout here
router.post('/register', authenticationController.create);
router.post('/login', authenticationController.login);
router.get('/profile', authMiddleware, authenticationController.profile);
router.get('/logout', authMiddleware, authenticationController.logout);

router.post('/userInfo',userInfoController.createUserInfo);
router.post('/addplant',addPlantController.addPlant)
router.get('/getall',getAallPlantController.getAllPlants)
router.get('/getbyid/:id',getPlantByIdController.getPlantById)
router.get('/searchByName/:name',searchPlantByNameController.searchPlantByName)


router.post('/plantByUser',createPlantByUserController.createPlantByUser)
router.get('/plantByUserId/:id', plantByUserId.getPlantsByUserId)

export default router;
