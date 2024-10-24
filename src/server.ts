import "dotenv/config";
import express, { Application, Request, Response, NextFunction } from "express";
import helmet from "helmet";
import router from "./routes";
import { initModels } from "./database";
import { AppError } from "./utils/errorHandler";

const app: Application = express();
const PORT = process.env.PORT || 8000;

initModels();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/v1/welcome", (req, res) => {
  res.status(200).send({ message: "Welcome to the API" });
});

app.use("/api/v1/", router);

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  next(
    new AppError({
      statusCode: 400,
      message: `Route ${req.originalUrl} not found`,
    })
  );
});

app.use((error: any, req: Request, res: Response,next:NextFunction ) => {
  error.status = error.status || "Failed";
  error.statusCode = error.statusCode || 500;
  res.status(error.statusCode).json({
    status: error.status,
    statusCode: error.statusCode,
    message: error.message,
  });
});

app.listen(PORT, () => {
  console.log(`🚀🚀🚀🔥🔥 Server runing on http://localhost:${PORT}`);
});


