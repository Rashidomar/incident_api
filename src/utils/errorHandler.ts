import { STATUSCODE } from "../constants";
import { IAppErrorArgs } from "../interfaces";

export class AppError extends Error {
  public status: string;
  public statusCode: STATUSCODE;
  public isOperational: boolean = true;

  constructor(args: IAppErrorArgs) {
    super(args.message);
    this.status = args.status || "Error";
    this.statusCode = args.statusCode;

    Object.setPrototypeOf(this, new.target.prototype);

    if (args.isOperational !== undefined) {
      this.isOperational = args.isOperational;
    }

    Error.captureStackTrace(this);
  }
}
