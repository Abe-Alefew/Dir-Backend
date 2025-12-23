import { StatusCodes } from "http-status-codes";
import expressAsyncHandler from "express-async-handler";

export const exposeMe = expressAsyncHandler(async (req, res) => {
  res.status(StatusCodes.OK).json({ user: req.user });
});