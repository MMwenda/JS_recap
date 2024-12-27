// //NON-BLOCKING CODE
// const fs = require('fs');

// fs.readFile('./txt/input.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.error("Error reading file:", err);
//         return; //stops the function
//     }
//     console.log(data); //this prints the data from the file
// });

// console.log("Reading file..."); //This will be printed first, because the readFile function is non-blocking


const fs = require('fs');

fs.readFile(`./txt/start.txt`, 'utf-8', (err, data1) => {
    if(err){
        console.error('Error reading file💥:', err);
    }
    fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data) => {
        //console.log(data); //prints data in read-this.txt
        fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
            console.log(data3);
            
            const textOut = `${data}\n${data3}`;
            fs.writeFile('./txt/final.txt', textOut, 'utf-8', err => {
                if(err){
                    console.error('Error writing file:', err);
                    return;
                }
                console.log('Your file has been written 😁');
            })
            
        })
        
    })
})
console.log("Reading file...");

