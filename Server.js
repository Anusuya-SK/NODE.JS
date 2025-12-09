const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res)=>{

    res.setHeader("Content-Type", "text/html");
    let path = './docs/';

    if(req.url == '/'){
        path += 'index.html';
        res.statusCode = 200;
    } else if(req.url == '/home'){
        res.statusCode = 301; //301 is redirection status code
        res.setHeader('Location', '/');
        res.end();
    } else if(req.url == '/about'){
        path += 'about.html';
        res.statusCode = 200;
    } else if(req.url == '/blog'){
        path += 'blog.html';
        res.statusCode = 200;
    } else {
        res.statusCode = 404;
        path += 'notFound.html';
    }

    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err.message);
            res.end();
        } else {
            // res.write(data);
            // res.end();
            res.end(data);
        }
    });
});

server.listen(3000, "localhost", ()=>{
    console.log("Server is listening");
});