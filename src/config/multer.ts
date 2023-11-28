import Multer, { diskStorage } from 'multer';
import { extname } from 'path';

export const storage = diskStorage({
  destination: './uploads', // Specify the directory where files should be saved
  filename: (req, file, callback) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    callback(null, uniqueSuffix + extname(file.originalname));
  },
});

export const allowedFileTypes = ['.txt'];

export const fileFilter = (req: any, file: any, callback: any) => {
  const ext = extname(file.originalname);
  if (allowedFileTypes.includes(ext)) {
    callback(null, true);
  } else {
    callback(null, false);
  }
};

export const upload = Multer({
  storage,
  fileFilter,
});
