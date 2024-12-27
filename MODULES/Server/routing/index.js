//const fs = require('fs'); // file system module for reading and writing files
//const url = require('url'); // url module for parsing url
const http = require('http'); // http module for creating server
const PORT = 8000;

const server = http.createServer((req, res) => {
    const pathName = req.url; // url of the request
    if (pathName === '/overview' ) {
        res.end('<h1>This is overview page</h1>');
        console.log(`A new request on '${pathName}' received on ${new Date().toLocaleString('en-US')}`);  
    } 
    else if (pathName === '/product') {
        res.end('<h1>This is product page</h1>');
        console.log(`A new request on '${pathName}' received on ${new Date().toLocaleString('en-US')}`);
    } 
    else {
        res.writeHead(404, {
            'Content-type': 'text/html', //header - info about the response, in this case "Content-type" is "text/html"
            'my-own-header': 'hello-world' // custom header
        }); // status code (404), and header must be before the response
        res.end('<h1>404</h1> <br> <h1>PAGE NOT FOUND!</h1>');
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
