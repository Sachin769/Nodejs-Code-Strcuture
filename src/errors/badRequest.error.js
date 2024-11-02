const BaseError = require("./base.error");

class BadRequest extends BaseError{
    constructor(propertyName){
        super("BadRequest",400,`Invalid Structure for ${propertyName} provided`,{})
    }
}

module.exports = BadRequest;