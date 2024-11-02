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

module.exports = errorHandler;