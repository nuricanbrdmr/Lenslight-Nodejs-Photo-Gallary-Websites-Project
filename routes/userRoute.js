import express from 'express';
import { createUser, loginUser, getDashboardPage, getAllUsers, getAUser, follow, unfollow } from '../controllers/userController.js';
import * as authMiddleware from "../middleWares/authMiddleware.js"

const router = express.Router();

router.route('/register').post(createUser);
router.route('/login').post(loginUser);
router.route('/dashboard').get(authMiddleware.authhenticateToken, getDashboardPage);
router.route('/').get(authMiddleware.authhenticateToken, getAllUsers);
router.route('/:id').get(authMiddleware.authhenticateToken, getAUser);
router.route('/:id/follow').put(authMiddleware.authhenticateToken, follow);
router.route('/:id/unfollow').put(authMiddleware.authhenticateToken, unfollow);

export default router;
