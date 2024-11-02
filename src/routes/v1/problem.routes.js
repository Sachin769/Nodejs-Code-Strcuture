const express = require("express");

const {problemController} = require("../../controllers");

const problemRouter = express.Router();


//if any request comes and routes contiues with /ping, we map with pingProblemController, same as above.
problemRouter.get("/ping",problemController.pingProblemController);
problemRouter.post("/add",problemController.addProblem);
problemRouter.delete("/:id",problemController.deleteProblem)
problemRouter.get("/get",problemController.getProblem);


module.exports = problemRouter