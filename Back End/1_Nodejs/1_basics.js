// const http = require("http");
// const godName = require("./features")

import http from "http";
// import godName from "./features.js";
// import { godName2, godName3} from "./features.js";

// import godName, {godName2,godName3,godName4,godName5} from "./features.js";
// console.log(godName,godName2,godName3,godName4,godName5);

// import * as myObj from "./features.js";
// console.log(myObj.godName3);

import { generateLovePercent } from "./features.js";
console.log(generateLovePercent());

const server = http.createServer((req,res)=>{
    // res.end("<h1>my name is Ritik hans </h1>");

 
    if(req.url === "/"){
        res.end("<h1>This is a Home Page </h1>");
    }
    else if(req.url === "/about"){
        res.end(`<h1> love is ${generateLovePercent()} </h1>`);
    }
    else if(req.url === "/contact"){
        res.end("<h1>Its a Contact page </h1>");
    }
    else{
        res.end("<h1> Page Not found </h1> ");
    }

});

server.listen(5000,()=>{
    console.log("Server is Working");
});
