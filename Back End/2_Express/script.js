import express from "express";
import path from 'path';


const app = express();

app.get("/", (req,res) =>{
    // res.send("Hi");
    // res.sendStatus(404);

    // res.json({
    //     sucess : true,
    //     products : [],
    // })

    // res.status(400).json("Meri marzi ");

    // accessing html file  using express \

//     const pathLocation = path.resolve();
//    res.sendFile(path.join(pathLocation, "./index.html"));
   

res.render("index");

})


app.listen(5000,()=>{
    console.log("Hi , Sever is working ");
})