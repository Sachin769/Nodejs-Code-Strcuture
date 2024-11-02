const logger = require("../config/logger.config");
const NotFoundError = require("../errors/notFound.error");
const {Problem} = require("../models");

class ProblemRepository{
    async createProblem(problemData){
        try{
            console.log("respository level upto coming");
            const problem = await Problem.create({
                title: problemData.title,
                description: problemData.description,
                testCases: problemData.testCases?problemData.testCases:[]
            })
            return problem;
        }catch(e){
            console.log("error",e);
            throw e;
        }
    }


    async deleteProblemById(id){
        const deleteProblem = await Problem.findByIdAndDelete(id);
        if(!deleteProblem){
            logger.info(`Problem Repository : Problem with id : ${id} not found in the db`);
            throw new NotFoundError("problem",id);
        }
        return deleteProblem;
    }
}

module.exports = ProblemRepository;