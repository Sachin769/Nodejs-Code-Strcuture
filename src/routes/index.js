const express = require("express");

const v1Router = require("./v1");
const apiRouter = express.Router();

//if any request come and routes start with /v1, we map with v1Router
apiRouter.use("/v1",v1Router);

module.exports = apiRouter;