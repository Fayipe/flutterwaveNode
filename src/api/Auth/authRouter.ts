import { validation } from './../../middleware/validation';
import express from "express";
import { controllerHandler } from "./../../shared/controllerHandler";
import { AuthController } from "./authController";
import { payloadValidation } from './authValidation';

const router = express.Router();
const call = controllerHandler;
const Auth = new AuthController();


router.get("/", validation(payloadValidation), call(Auth.getUserDetails, (req, res, next) => []));

router.post("/validate-rule",
  call(Auth.validateRules, (req, res, next) => [req.body]));

export const AuthRouter = router;
