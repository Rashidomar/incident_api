import { STATUSCODE } from "../constants";
import { IAppErrorArgs } from "../interfaces";

export class AppError extends Error {
  public status: string;
  public statusCode: STATUSCODE;

  constructor(args: IAppErrorArgs) {
    super(args.message);
    this.status = args.status || "Error";
    this.statusCode = args.statusCode;

    // Error.captureStackTrace(this);
  }
}
