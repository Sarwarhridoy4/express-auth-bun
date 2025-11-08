import express from "express";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import testRoutes from "./routes/test.route.js";

const app = express();

// Core middlewares
app.use(helmet());
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000", // frontend origin
    credentials: true,
  })
);

// Health route
app.get("/", (req, res) => {
  res.json({ message: "Server is running 🚀" });
});

// Modular route example
app.use("/api/v1", testRoutes);

export default app;
