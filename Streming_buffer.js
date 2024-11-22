const http = require("http");
const fs = require("fs");

// crate basic streaming server by node.js

const server = http.createServer();

server.on("request", (req, res) => {
    console.log(req.url, req.method);
    if (req.url === "/read-file" && req.method === "GET");
    // const readStream = fs.createReadStream(process.cwd() + "/texts/read-text.txt") // process.cwd() return the current path
    const readStream = fs.createReadStream(__dirname + "/texts/read-text.txt"); // __dirname returns the current path.

    readStream.on("data", (buffer) => {
        res.write(buffer);
    });
    readStream.on("end", () => {
        res.end("file read ended successfully");
    });

    // res.end("Server is running at http://localhost:5000")
});

server.listen(5000, () => {
    console.log("server is listening on http://localhost:5000");
});
