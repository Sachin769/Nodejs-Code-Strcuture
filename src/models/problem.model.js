const mongoose = require("mongoose");

const problemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title Can Not Be Empty"]
    },
    description: {
        type: String,
        required: [true, "Description Can Not Be Empty"]
    },
    difficulty: {
        type: String,
        enum: ["easy", "medium", "hard"],
        default: "easy"
    },
    testCases: [
        {
            input: {
                type: String,
                required: true
            },
            output: {
                type: String,
                required: true
            }
        }

    ]
})
//above schema is the logical view of how collection look like

//In order to create those collection,query those collection we can not use logical schema.
const Problem = mongoose.model("Problem",problemSchema);
//here in mongoose model pass the parameter for collection name that will prepare and second argument is Schema that mongoose constantly
//validate when we play with it.

//mongoose.model return brand new model object with some property and functionlity , all together to use query on that collection.

module.exports = Problem