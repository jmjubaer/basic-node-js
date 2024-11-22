const fs = require('fs');


 // synchronous filesystem. its has a problem of blocking behavior
const readTextSync = fs.readFileSync("./texts/read-text.txt", "utf-8"); // read text synchronously
fs.writeFileSync("./texts/write-text.txt", readTextSync); // write text synchronously

// asynchronous filesystem
const readText = fs.readFile("./texts/read-text.txt","utf-8",(err,data) => {
    if(err) throw err;
    console.log(data); // print read text
    fs.writeFile("./texts/write-text-2.txt", data, "utf-8",(err) => {
        if(err) throw err;
        console.log("Text written successfully");
    }); // write text asynchronously
}); // read text asynchronously


