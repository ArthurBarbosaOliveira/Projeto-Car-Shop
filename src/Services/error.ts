import { NextFunction, Request, Response } from 'express';
import Http from './http';

export default class Error {
  public static handler(error: Error, _req: Request, res: Response, next: NextFunction) {
    const { status, message } = error as Http;
    res.status(status || 500)
      .json({ message });
    next();
  }
}
