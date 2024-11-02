const NotImplementedError = require("../errors/notImplemented.error");

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
        throw new NotImplementedError("addProblem Controller");
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


async function deleteProblem(req,resp ,next) {
    try{
        throw new NotImplementedError("deleteProblem Controller");
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