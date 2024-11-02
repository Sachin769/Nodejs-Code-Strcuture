const mongoose = require("mongoose");
const {ATLAS_DB_URL,NODE_ENV} = require("./server.config");

async function connectToDB() {
    try{
        if(NODE_ENV === "development"){
            await mongoose.connect(ATLAS_DB_URL); 
        }else if(NODE_ENV ==="production"){
            //connect the production db url
        }
    }catch(e){
        console.log("Unable To Connect To the DB-Driver");
        console.log(e);
        throw e;// here throw is required because if not throw then return undefined which is not handling by the catch in startup file.
    }
}

module.exports = connectToDB;