const http = require("http");

const server = http.createServer((req, res)=>{
    console.log("Request made");
    console.log(req.url);
    console.log(req.method);

    res.setHeader("Content-Type", "text/html");
    res.write("<head rel='script' href=''></head>")
    res.write("<h1>Hi, Welcome to this page!</h1>");
    res.write("<h4>Node Server Example</h4>")
    res.end();
});

server.listen(3000, "localhost", ()=>{
    console.log("Server is listening");
});