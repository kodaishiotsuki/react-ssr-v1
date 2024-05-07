import express, {
  Request,
  Response,
  ErrorRequestHandler,
  NextFunction,
} from "express";
import ssr from "./view/ssr";

const app = express();

app.get("/", (_req: Request, res: Response) => {
  res.send(ssr());
});

// エラーハンドラーに型を明示
const errorHandler = (
  err: ErrorRequestHandler,
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).send("Internal Server Error");
};

app.use(errorHandler);

app.use("/static", express.static("dist/static"));
app.listen(3000);
console.log("Server is listening on port 3000");
