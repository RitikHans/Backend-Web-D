import http from 'http';

const port = process.env.PORT || 3000;

const server = http.createServer((req,res)=>{

console.group(req.url);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end("<h1>This is Ritik Hans From Nit Jalandhar </h1><p>This is the way to roc the world</p>" );

});


server.listen(port, ()=>{
    console.log(`server is working at port ${port}`);
})

