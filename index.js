const http = require('node:http');
const fs = require('fs');
const path = require('node:path');

const server = http.createServer((req, res) => {
    let filepath = null;
    
    switch (req.url) {
        case ("/"):
            filepath = "index.html";
            break;
        case ("/about"):
            filepath = "about.html";
            break;
        case ("/contact"):
            filepath = "contact.html";
            break;
        default:
            filepath = "404.html";
            break;
    }

    fs.readFile(path.join(__dirname, filepath), 'utf-8', (err, data) => {
        if (err) {
            res.writeHead(404, 'Not Found', { "Content-Type": "text" })
            res.end("404 Not Found")
        }
        else {
            res.writeHead(200, 'OK', { "Content-Type": "text/html" })
            res.end(data)
        }
    })
})

server.listen(8080, () => {
    console.log("Server running at http://localhost:8080");
})