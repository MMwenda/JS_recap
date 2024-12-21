const fs = require('fs'); // File System module to read files  
//const path = require('path'); //Path module to get the path of the file //NOT USED HERE

// Reading the file,first param is the path, the second parameter is for encoding format [for english]
//without the second param we get a data buffer =  a region of memory used to store data temporarily while it is being moved from one place to another..., but we only want the text
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8'); 
console.log(textIn);

const textOut = `This is what we know about the avocado: "${textIn}" \nCreated on ${Date()} `;

//Writing the file,first param is the path, second param specifying what is being wrote
fs.writeFileSync('./txt/output.txt', textOut);
console.log('File has been written');