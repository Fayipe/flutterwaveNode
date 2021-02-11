import express from "express";
import { controllerHandler } from "./../../shared/controllerHandler";
import { AuthController } from "./authController";

const router = express.Router();
const call = controllerHandler;
const Auth = new AuthController();


router.get("/", call(Auth.getUserDetails, (req, res, next) => []));

router.post("/validate-rule",
  call(Auth.validateRules, (req, res, next) => [req.body]));

export const AuthRouter = router;
