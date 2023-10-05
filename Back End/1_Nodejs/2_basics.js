
// Using Asynchronous way 

// import fs from "fs";
// import http from "http";

// // const home = fs.readFile("./2_index.html", ()=>{
// //     console.log("File read");
// // });

// const server = http.createServer((req,res)=>{
//     if(req.url === "/"){
//         fs.readFile("./2_index.html", (err,home)=>{
//             res.end(home);
//         }); 
//     }
// });

// server.listen(5000,()=>{
//     console.log("Serving is Processing.....");
// });






// using synchronous Technique 

import http from "http";
import fs from "fs";
import path from 'path';

console.log(path.extname("/home/random/index.html"))
console.log(path.dirname(home/index.js));


// const home = fs.readFileSync("./2_index.html");
// console.log(home);
const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.end(home);
    }
});


server.listen(4000,()=>{
    console.log("Server is working Properly .....");
})
