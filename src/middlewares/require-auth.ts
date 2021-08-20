import { NextFunction, Request, RequestHandler, Response } from 'express';
import { NotAuthorizedError } from '../errors/not-authorized-error';

export const requireAuth: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
  if (!req.currentUser) throw new NotAuthorizedError();
  next();
};
