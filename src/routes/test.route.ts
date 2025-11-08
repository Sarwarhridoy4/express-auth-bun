import { Router } from "express";
import { catchAsync } from "../utils/catchAsync.js";
import { sendResponse } from "../utils/sendResponse.js";



const router = Router();

router.get(
  "/ping",
  catchAsync(async (req, res) => {
    sendResponse({
      res,
      message: "pong 🏓",
      data: { time: new Date().toISOString() },
    });
  })
);

export default router;
