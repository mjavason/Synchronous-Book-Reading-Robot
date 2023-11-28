import { NextFunction, Request, Response } from 'express';
import { BadRequestResponse } from '../helpers/response.helper';

const isSingleFileUploaded = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.file) return BadRequestResponse(res, 'File upload missing. File must be .txt type');

  return next();
};

export default isSingleFileUploaded;
