const { log } = require('console');
const fs = require('fs');
const http = require('http'); //http module for providing networking capabilities, eg building a server
const PORT = 8000;

//create server
const server = http.createServer((req, res) => {
    res.end('Hello from the server!'); //response to the client whenever a request is made
    console.log(req); //logs the request object whenever a request is made
    
    })

server.listen(PORT, '127.0.0.1', () => {
    console.log(`Listening to requests on port: ${PORT}`);
})