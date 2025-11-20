const fs = require("fs");

// Check if folder exists, otherwise creates new folder
if(!fs.existsSync("./docs")){
    fs.mkdir('./docs', (err)=>{
        if(err) console.log(err.message);
        else console.log("Folder Created");
    });
} else {
    // If folder exists, create new file
    fs.writeFile('./docs/output.txt', 'Hello World!', (err)=>{
        if(err) console.log(err.message);
        else console.log("File Created");
    })
}

// Check if file exists, read the data from the file
if(fs.existsSync("./docs/output.txt")){
    fs.readFile('./docs/output.txt', (err, data)=>{
        if(err) console.log(err.message);
        else console.log(data.toString());
    })
}

// Check if file exists, delete the file
if(fs.existsSync("./docs/output.txt")){
    fs.unlink('./docs/output.txt', (err)=>{
        if(err) console.log(err.message);
        else console.log("File Removed");
    })
}

// Check if folder exists, delete the folder
if(fs.existsSync("./docs")){
    fs.rmdir('./docs', (err)=>{
        if(err) console.log(err.message);
        else console.log("Folder Removed");
    });
}