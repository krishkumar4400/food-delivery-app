import { Router } from "express";
import {
  loginController,
  registerController,
} from "../modules/auth/controller/auth.controller.js";

const authRouter = Router();

authRouter.post("/login", loginController);
authRouter.post("/login", registerControllerController);

export default authRouter;
