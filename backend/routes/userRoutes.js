import express from 'express';
import { authUser, RegisterUser, getUserProfile, UpdateUserProfile } from '../controllers/userController.js';
const router = express.Router();
import { protect } from '../middleware/authmiddleware.js';

router.route('/').post(RegisterUser)
router.post('/login', authUser)
router
    .route('/profile')
    .get(protect, getUserProfile)
    .put(protect, UpdateUserProfile)


export default router;