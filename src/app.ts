import express from "express";
import { errorHandler, global } from "./middleware";
import { logger } from "./utils/logger";
import { AuthRouter } from "./api/Auth";


class App {
  public express = express();
  public basePath = "";
  constructor() {
    this.boot();
  }

  public appDetails: any;

  private boot() {
    this.registerMiddlewares();
    this.mountRoutes();
    this.handleUncaughtErrorEvents();
  }

  private mountRoutes() {
    this.express.use(`${this.basePath}`, AuthRouter);
  }

  private registerMiddlewares() {
    global(this.express);
  }

  // Error handlers
  private handleUncaughtErrorEvents() {
    process.on("unhandledRejection", (reason, promise) => {
      throw reason;
    });

    process.on("uncaughtException", (error) => {
      logger.error(`Uncaught Exception: ${500} - ${error.message}, Stack: ${error.stack}`);
      process.exit(1);
    });

    process.on("SIGINT", () => {
      logger.info(" Alright! Bye bye!");
      process.exit();
    });

    this.express.use(errorHandler);

  }
}

export default new App().express;
