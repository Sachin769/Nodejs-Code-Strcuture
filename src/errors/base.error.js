class BaseError extends Error{
    constructor(name,statusCode,description,details){
        super(description); //first argument is always message of Error construtor class and other are optional
        this.name = name;
        this.statusCode = statusCode;
        this.details = details;//if require extra information then it is useful
        Error.captureStackTrace(this) // this is useful when stack frame want to log so that understand in which way came to the error
    }
}

module.exports = BaseError



/*

Error.captureStackTrace(this);

A stack trace is like a detailed map of how the code reached a specific point, especially when an error occurs. 
It shows the series of function calls that led up to the error, which helps developers figure out exactly where 
and why something went wrong in the code.
e.g

                                               With Error.captureStackTrace(this);

D:\Sachin\Algocode-Problem-Service\src\index.js:24
    throw new BaseError("Some Error",404,"Something Went Wrong");
    ^

BaseError [Some Error]: Something Went Wrong
    *** at new BaseError (D:\Sachin\Algocode-Problem-Service\src\errors\BaseError.js:6:15)  ***
    *** at Server.<anonymous> (D:\Sachin\Algocode-Problem-Service\src\index.js:24:11)  ***
    ...

Node.js v20.18.0
[nodemon] app crashed - waiting for file changes before starting...




                                              Without Error.captureStackTrace(this);

D:\Sachin\Algocode-Problem-Service\src\index.js:24
    throw new BaseError("Some Error",404,"Something Went Wrong");
    ^

BaseError [Some Error]: Something Went Wrong
   *** at Server.<anonymous> (D:\Sachin\Algocode-Problem-Service\src\index.js:24:11) ***
    ....
}

Node.js v20.18.0
[nodemon] app crashed - waiting for file changes before starting...

*/




 // Capture the stack trace, excluding the constructor function.
//  Error.captureStackTrace(this, CustomError);