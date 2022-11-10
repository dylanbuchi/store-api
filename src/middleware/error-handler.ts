import { NextFunction, Request, Response } from "express";
import type { ResponseError } from "../interfaces/errors";

export const errorHandlerMiddleware = async (
  error: ResponseError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res
    .status(500)
    .json({ message: "Oops, something went wrong... Please try again later." });
  next(error);
};
