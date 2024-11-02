const marked = require("marked");
const sanitizeHtml = require("sanitize-html");
const TurnDownService = require("turndown");


function sanitizeMarkDown(markedDownContent){
    const turnDownService = new TurnDownService(markedDownContent);
    //1. Convert markdown to html
    const convertedHtml = marked.parse(markedDownContent);

    //2.Sanitize then html
    const sanitizedHtml = sanitizeHtml(convertedHtml,{
        allowedTags: sanitizeHtml.defaults.allowedTags  //if we want to allow script tags we can push in allowedtags see documentation of that 
    });

    //3.Convert the sanitizedHtml back to the markdown
    const sanitizedMarkDown = turnDownService.turndown(sanitizedHtml);
    return sanitizedMarkDown;
}

const input = `
# Hellow World


### this is the markdown
- something

<script>alert("whooo")</script>

[Link](www.google.com)

`

sanitizeMarkDown(input);

module.exports = sanitizeMarkDown;

