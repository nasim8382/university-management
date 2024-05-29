import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { StudentRoutes } from "./app/modules/student/student.route";
import { UserRoutes } from "./app/modules/user/user.route";
import { error } from "console";
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

// application routes
app.use("/api/v1/students", StudentRoutes);
app.use("/api/v1/users", UserRoutes);

const getAController = (req: Request, res: Response) => {
  const a = 22;
  res.send(a);
};

app.get("/", getAController);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const statusCode = 500;
  const message = err.message || "Something went wrong!!!";

  return res.status(statusCode).json({
    success: false,
    message,
    error: err,
  });
});

export default app;
