import * as dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT;
export const ENVIRONMENT = process.env.NODE_ENV;
export const APP_URL = process.env.APP_URL;