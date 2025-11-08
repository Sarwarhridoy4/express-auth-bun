import type { Response } from "express";

interface SendResponseParams<T> {
  res: Response;
  statusCode?: number;
  success?: boolean;
  message?: string;
  data?: T | null;
  meta?: Record<string, any>;
}

export function sendResponse<T>({
  res,
  statusCode = 200,
  success = true,
  message = "Success",
  data = null,
  meta,
}: SendResponseParams<T>) {
  return res.status(statusCode).json({
    success,
    message,
    data,
    meta,
  });
}
