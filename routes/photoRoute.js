import express from 'express';
import { createPhoto, getAllPhotos, getPhoto, deletePhoto, updatePhoto } from '../controllers/photoController.js';

const router = express.Router();

router.route('/').post(createPhoto).get(getAllPhotos);

router.route("/:id").get(getPhoto);

router.route("/:id").delete(deletePhoto);

router.route("/:id").put(updatePhoto);

export default router;