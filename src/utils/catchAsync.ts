import type { NextFunction, Request, RequestHandler, Response } from "express";

/**
 * Wrap async controllers to automatically pass errors to next()
 */
export const catchAsync =
  (fn: RequestHandler) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
