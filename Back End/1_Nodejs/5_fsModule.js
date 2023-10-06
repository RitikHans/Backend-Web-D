const fs = require('fs');



// Read File 

// fs.readFile("5_file.txt","utf-8",(err, data)=>{
//     console.log(err, data);
// });

// console.log("Finish Reading File ");





// Read file Sync 

// const val = fs.readFileSync("./5_file.txt");
// console.log(val);
// console.log(val.toString());

// console.log("Finish reading file ");





// Write File 

// fs.writeFile("5_file.txt","This is a new data", ()=>{
//     console.log("Written to the file ");
// })

// console.log("Finished Reading File ");




// write file sync 

b = fs.writeFileSync("5_file.txt","Adding data through write file sync ");
console.log(b);

