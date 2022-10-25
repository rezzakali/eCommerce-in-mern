// external imports
import { Router } from 'express';
import logOutController from '../controller/logOutController.js';

// internal imports
import signInController from '../controller/signInController.js';
import signUpController from '../controller/signUpController.js';
import authentication from '../middlewares/auth.js';
import profileUpload from '../middlewares/profileUpload.js';

// router object
const router = Router();

// sign up router
router.post('/signup', profileUpload, signUpController);

// sign in router

router.post('/signin', signInController);

// logout
router.get('/logout', logOutController);

// authentication
router.get('/auth', authentication);

export default router;
