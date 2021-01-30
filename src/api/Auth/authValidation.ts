import { IAuth } from './IAuth';
import Joi from "joi";

export const payloadValidation = Joi.object().keys(<IAuth><unknown>{
    rule: Joi.object().required(),
    data: Joi.object().required()
});
