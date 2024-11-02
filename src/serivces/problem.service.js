const { markDownSanitizer } = require("../utils");

class ProblemService{
    constructor(problemRepository){
        this.problemRepository = problemRepository;
    }

    async createProblem(problemData){
        try{
            //1. Sanitize the markdDown for description
            problemData.description = markDownSanitizer(problemData.description);
            const problem = await this.problemRepository.createProblem(problemData);
            return problem;           
        }catch(e){
            console.log("e",e);
            throw e;
        }
    }

}


module.exports = ProblemService



/*
If we did like

                       Tight Coupling

const ProblemRepository = require('./ProblemRepository');
class ProblemService{
    constructor(){
        this.problemRepository = new ProblemRepository();
    }
    async createProblem(problemData){
        try{
            //1. Sanitize the markdDown for description
            problemData.description = markDownSanitizer(problemData.description);
            const problem = await this.problemRepository.createProblem(problemData);
            return problem;           
        }catch(e){
            console.log("e",e);
            throw e;
        }
    }

}

Now here if repository (database changes) or testing database change to require
then we nedd to change here two areas
import statement -> Updated to import AlternativeProblemRepository instead of ProblemRepository.
Constructor -> Changed instantiation from ProblemRepository to AlternativeProblemRepository.


                        Loose Coupling

Here the above mention code which is uncommented is loose coupling becuase here
we don't need to change anything here whatever controller pass reposiory object it will assign here
and not require to change here. SO only change require to only controller where instance of Service and 
instance of repository created.


*/