import http from 'http';
import fs from 'fs';

const port = process.env.PORT || 5000;

const server = http.createServer((req,res)=>{

    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    console.group(req.url);


    if(req.url == '/'){
        const data = fs.readFileSync("10_index.html")
        res.end(data.toString());
        res.statusCode = 200;

    }
    else if(req.url == '/about'){
        res.end("<p>You are in about page </p>");
        res.statusCode = 200;
    }
    else if(req.url == '/content'){
        res.end("<h1>You are in Home page </h1>" );
        res.statusCode = 200;
    }
    else{
        res.end("The page is not found on the server ");
        res.statusCode = 404;
    }
});


server.listen(port, ()=>{
    console.log(`server is working at port ${port} ......`);
})

