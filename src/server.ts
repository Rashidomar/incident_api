import express, { Application } from "express";
import router from "./routes";
import { initModels } from "./database";

const app: Application = express();
const PORT = process.env.PORT || 8000;

initModels();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/api/v1/", router);

app.listen(PORT, () => {
  console.log(`🚀🚀🚀🔥🔥 Server runing on http://localhost:${PORT}`);
});
