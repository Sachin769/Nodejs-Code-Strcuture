const BaseError = require("../errors/base.error");


//due to four parameter the express understand this is error handler not a middleware
function errorHandler(err,req,resp,next){
    if(err instanceof BaseError){
        return resp.status(err.statusCode).json({
            success: false,
            message: err.message,
            error: err,
            data: {}
        })
    }else{
        return resp.status(500).json({
            success: false,
            message: "Something Went Wrong!!",
            error: err,
            data: {}
        })
    }
}

// here if this errorHandler conatin error then that errorHandler error handle by the bydefault error handler of express
//we can check by removing here next function from the error handler and look like error handler but actually middleware 
module.exports = errorHandler;