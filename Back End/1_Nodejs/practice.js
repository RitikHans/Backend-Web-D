const http = require("http");

const server = http.createServer((req,res)=>{
    res.end("Hey this website is working properly ");
});


server.listen(9000);