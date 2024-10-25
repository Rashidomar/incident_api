import { Response, Request, NextFunction } from "express";
import { AnyZodObject, ZodError } from "zod";
import { AppError } from "../utils/errorHandler";

export const validateInput =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        params: req.params,
        query: req.query,
        body: req.body,
      });

      next();
    } catch (error: any) {
      if (error instanceof ZodError) {
        const onlyMessags = error.errors.map((element) => element.message);
        return next(
          new AppError({
            statusCode: 400,
            message: onlyMessags,
          })
        );
      }
    }
  };
