const NotImplementedError = require("../errors/notImplemented.error");
const {ProblemService} = require("../serivces");
const {ProblemRepository} = require("../repositories");

const problemService = new ProblemService(new ProblemRepository());// here just to change repository if required and remainig all same (loose coupling)

async function pingProblemController (req,resp,next){
    try{
        console.log("req.body",req);
        throw new NotImplementedError("ping problem controller");
    }catch(e){
        next(e);
    }
}

async function addProblem(req,resp,next) {
    try{
        const newProblem = await problemService.createProblem(req.body);
        return resp.status(201).json({
            success: true,
            message: "Successfully Created A New Problem",
            error: {},
            data: newProblem
        })
    }catch(e){
        next(e);
    }
}

async function getProblem(req,resp,next) {
    try{
        throw new NotImplementedError("getProblem Controller");
    }catch(e){
        next(e);
    }
}


async function deleteProblem(req,resp,next){
    try{
        const deleteProblemById = await problemService.deleteProblemById(req.params.id);
        return resp.status(200).json({
            success: true,
            message: "Successfully Deleted the Problem",
            error: {},
            data: deleteProblemById
        });
    }catch(e){
        next(e);
    }
}

async function updateProblem(req,resp,next) {
    try{
        throw new NotImplementedError("updateProblem Controller");
    }catch(e){
        next(e);
    }
}



module.exports = {
    pingProblemController,
    addProblem,
    getProblem,
    deleteProblem,
    updateProblem
}