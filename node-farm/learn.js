//API's example

const fs = require('fs');
const http = require('http'); //http module for providing networking capabilities, eg building a server
const PORT = 8000;

//read data from a file

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8'); //read the data and ('utf-8') converts it into string
const dataObj = JSON.parse(data); //parse the data to JSON fo r manipulation

const productNamesJSON = dataObj.map((element) => {
    // element.productName;
    //console.log(`${element.productName} -> ${element.price} in USD, from ${element.from}.`); //practice

    return `${element.productName} -> ${element.price} in USD, from ${element.from}.`; //return the product name, price and from [ARRAY]
}).join(' <br>'); //join the array with a new line
const productNames = JSON.stringify(productNamesJSON);

const server = http.createServer((req, res) =>{
    const pathName = req.url;

    if(pathName === '/overview'){
        res.end('<h1>This is the overview</h1>');
        console.log(`A new request on '${pathName}' received on ${new Date().toLocaleString('en-US')}`);  
    }
    else if(pathName === '/products'){
        res.writeHead(200, //status code 200 means success
            {'Content-type': 'text/html'}); //header for html data
        res.end(`<h1> This is the products page</h1> <br> ${productNames}`); //make the product name, price and from to be displayed
        console.log(`A new request on '${pathName}' received on ${new Date().toLocaleString('en-US')}`);  
    }
    else if(pathName === '/api'){
        // fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8',(err, data) => {

        //     if(err){console.log(`ERROR💥: ${err}`); return; //return to stop the function from running	
        //     }

        //    const productData = JSON.parse(data); //it is initially a string data, so we need to parse it to JSON in order to access properties or manipulate data

        // //    console.log(productData); -> JSON data
        // //    console.log(data); -> string data
           
           
        //     res.writeHead(200, //status code 200 means success
        //          {'Content-type': 'application/json'}); //header for json data
        //     res.end(data); //data is already string 👍🏽

        //     // res.end(JSON.stringify(productData)); //this is the same as res.end(data), but we are converting the data to string
        //     // data can only be read in string format, that is why we change JSON data back to string
        //     console.log(`A new request on '${pathName}' received on ${new Date().toLocaleString('en-US')}`);
        // })

        //moving the code above to the top of the file to avoid reading the file each time a request is made

        res.writeHead(200, //status code 200 means success
            {'Content-type': 'application/json'}); //header for json data

        res.end(data); //data is already string 👍🏽
        console.log(`A new request on '${pathName}' received on ${new Date().toLocaleString('en-US')}`);
    }
    else{
        res.writeHead(404, { //status code 404 means not found
            'Content-type': 'text/html', //header for html data
            'my-own-header': 'hello-world'
        });
        res.end('<h1>404</h1> <br> <i>OOPS, PAGE NOT FOUND</i>');
        console.log(`A new request on '${pathName}' received on ${new Date().toLocaleString('en-US')}`);  
    }
})

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    
});