const express =  require("express");
const bodyParser = require("body-parser");

const {PORT} = require("./config/server.config");
const connectToDB = require("./config/db.config");
const errorHandler = require("./utils/errorHandler");
const apiRouter = require("./routes");


const app = express();


//allowed post content-type
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));//by default false library is decrepted by the body-parser pkg But true library is not deprecated.
app.use(bodyParser.text());

//if any request comes and routes start with /api, we map with apiRouter
app.use("/api",apiRouter);

app.get("/ping",(req,resp) =>{
    return resp.json({message: "Alog-Code-Problem-Service is Live"});
})

app.use(errorHandler);//here due to contain four parameter express understand with the error handler instead of middleware.
/*
So if this above "errorhandler" is put above after the "app" then that error handler is wastage because express understand this is as 
a error handler instead of middlewaer so all request not passing with that we can check with "console.log()". But can not be use as a 
error handler because if want to use a error handler then shoudl be sit at last before app.listen becuase next() contain error then go
direct here errorHandler becuase this is used as a next middleware.

*** if we not provided error handler then express by default have error handler which automatically sit on the befoer app.listen() but the
difference is like the error handler response structure is not a way as we want according to the project. ***



Details Explanation
In Express, an "error handler" is a special kind of middleware designed specifically to handle errors. The placement of this error handler in your code is very important:

Order of middleware in Express: Middleware functions in Express are executed in the order they’re defined. So, if you place the error 
handler too early (for example, before all other middlewares or route handlers), Express will interpret it as a regular middleware instead
 of an error handler. This means it won't be triggered by errors as expected.

Why place it at the end? 
To make sure the error handler works correctly, it should be added at the end of all other middlewares (just before app.listen). 
This is because if an error happens somewhere in your code and next(error) is called, Express will look for the next middleware function
that’s specifically designed to handle errors (functions with four arguments: err, req, res, next).

Default Error Handler:
If you don’t define your own error handler, Express has a default one that automatically catches errors and sends a generic error response. 
However, this default handler may not provide the custom error structure or detailed information you might want for your project.

By defining your own error handler at the end, you can control how errors are handled and formatted in your responses. This lets you 
send error details that match your project’s requirements, which the default handler may not do.


********due to four parameter the express understand this is error handler not a middleware*******

*/
app.listen(PORT,async()=>{
    try{
        console.log(`Server Listen At Port: ${PORT}`);
        await connectToDB();
        console.log("Successfully Connectecd To The DB");
    }catch(e){
        console.log("error in catch block during listen the server",e.name,e.details,e.stack);
    }
})