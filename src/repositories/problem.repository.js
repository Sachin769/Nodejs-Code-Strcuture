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
}

module.exports = ProblemRepository;