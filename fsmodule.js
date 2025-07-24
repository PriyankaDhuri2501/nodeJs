//NON-BLOCKING IO MODEL CONCEPT

const fs = require('fs')

//this function leads to non-blocking of the process
// fs.readFile('file.txt','utf8', (err,data)=>{
//     console.log(err,data)
// })


//this function syncs the operation sequentially blocking the process
// const a = fs.readFileSync('file.txt');
// console.log(a.toString());

// fs.writeFile('file2.txt', "This is a data", ()=>{
//     console.log("Written to the file")
// })

b = fs.writeFileSync('file3.txt', "This is a data2 ")
console.log(b)

console.log("Finished reading the file")