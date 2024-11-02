const express = require("express");

const problemRouter = require("./problem.routes");


/*

Here Not to Much contoller require() {Multiple Import}
const {ProblemController} = require("../../controllers/problem.controller.js");
const {newControllerFile} = require("../../controllers/new.controller.js");
So for every controller We have to new Import

To Prevent this is we prepare a index.js on the controller folder and all controller file integration done in that index.js of controller
file 
After this we saw, we simple make one file integration i.e index.js(controller) e.g.ProblemController.getProblem, ProblemController.addProblem.
This will reduce the no. of Import we have previously.

*/


// const {ProblemController} = require("../../controllers");  This is used as an example for above comments




const v1Router = express.Router();


//if any request comes with routes start with /problems, we map with problemRouter
v1Router.use("/problems",problemRouter);


module.exports = v1Router;
