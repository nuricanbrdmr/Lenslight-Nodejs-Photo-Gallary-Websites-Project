import express from 'express';
import { sendMail, getContactPage, getAboutPage, getIndexPage, getRegisterPage, getLoginPage, getLogoutPage } from '../controllers/pageController.js';

const router = express.Router();

router.route('/').get(getIndexPage);
router.route('/about').get(getAboutPage);
router.route('/register').get(getRegisterPage);
router.route('/login').get(getLoginPage);
router.route('/logout').get(getLogoutPage);
router.route('/contact').get(getContactPage);
router.route('/contact').post(sendMail);

export default router;
