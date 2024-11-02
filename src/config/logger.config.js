//monitoring service provided logger
const winston = require("winston");
const {LOG_DB_URL} = require("./server.config");
require("winston-mongodb");// just requrie winston-mongodb package don't need to use anything from this, so that it load all the required library and everything.





//trasnport decide what kind of level of log should go in which either in console or in file
//so trasport is the place where log will come up.
const allowedTransports = [];



//I want winston give me a log in the console.
allowedTransports.push(new winston.transports.Console({
// if our default formating is not mention then winston default formating go and if winston default go and not fomating in trasport then winston default go in transport
    //here we apply console transport own set of formating that override the default formating which we decide below code.
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
            format: "YYYY-MM-DD HH:mm:ss"
        }),
        winston.format.printf((log) => `${log.timestamp} [${log.level}] : ${log.message}`) // here log.level if apply any method which will create a problem.It seems colour will applicable with case-sesitive so error should be look like  "error"ss
    )
}))



//I want winston give me a error log in the mongodb too.
allowedTransports.push(new winston.transports.MongoDB({
    level: "error",
    db: LOG_DB_URL,
    collection: "errorLogs"
}))


//I want winston give me a all kind of level log in the file too.
allowedTransports.push(new winston.transports.File({
    filename: "app.log"
}))





//here we define the default formating this default formating will apply to all the transport which do not have their own trasport formating.
const logger = winston.createLogger({
    format: winston.format.combine(  //here we decide our custom logger,i.e what are the informative value should come in logger according to the application we build. if we not decide then winston default logg display.
        //first argument to the combine method is defining how we want the timestamp to come up

        winston.format.timestamp({
            format: "YYYY-MM-DD HH:mm:ss"
        }),
        //second argument to the combine method, which defines what is exactly going to the printed in log
        winston.format.printf((log) => `${log.timestamp} [${log.level.toUpperCase()}] : ${log.message}`)
    ),
    transports: allowedTransports
})

module.exports = logger;


//if we want to store a logg in database because of gb amount of log coming we choose some noSql file basesd database. or dump logger after a fix intervale of time if we save logger in the server file.
//generally logger should handle be the different service in production