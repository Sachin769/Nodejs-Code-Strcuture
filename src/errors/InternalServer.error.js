const BaseError = require("./base.error");

class InternalServerError extends BaseError{
    constructor(propertyName){
        super("Internal Server Error",500,"Something Went Wrong !!",{});
    }
}

module.exports = InternalServerError;