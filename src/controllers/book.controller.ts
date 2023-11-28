import { Request, Response } from 'express';
import { resetTokenService } from '../services';
import {
  SuccessResponse,
  InternalErrorResponse,
  SuccessMsgResponse,
} from '../helpers/response.helper';

class Controller {
  async read(req: Request, res: Response) {
    const fileUploadBuffer = req.file?.buffer ?? '';
    const fileUploadMimeType = req.file?.mimetype ?? '';

    try {
      const b64 = Buffer.from(fileUploadBuffer).toString('base64');
      let dataURI = 'data:' + fileUploadMimeType + ';base64,' + b64;

      return SuccessMsgResponse(
        res,
        `Book upload successful. Queue updated. You'll be notified once reading is completed`
      );
    } catch (error: any) {
      console.log(error);
      return InternalErrorResponse(res);
    }
  }
}

export const bookController = new Controller();
