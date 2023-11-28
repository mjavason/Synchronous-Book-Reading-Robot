import express from 'express';
const router = express.Router();
import isAuth from '../../../middleware/is_auth.middleware';
import { bookController } from '../../../controllers';
import { upload } from '../../../config/multer';
import isSingleFileUploaded from '../../../middleware/is_file_uploaded.middleware';

router.use(isAuth);
router.post(
  '/read',
  [upload.single('book'), isSingleFileUploaded],
  bookController.read
);

export default router;
