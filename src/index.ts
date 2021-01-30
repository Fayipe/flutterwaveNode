import server = require("http");
import app from "./app";
import { PORT } from "./config";
import { logger } from "./utils/logger";

const port = PORT || 3000;

const http = new server.Server(app);

http.listen(port, () => {
    logger.info(`Started server on port: ${port}`);

});

