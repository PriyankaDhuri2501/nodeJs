const http = require('http');
const console = require('console');
const fs = require('fs');

const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    
    if(req.url === '/') {
        res.statusCode = 200;
        const data = fs.readFileSync('index.html');
        res.end(data.toString());
    } else if(req.url === '/about') {
        res.statusCode = 200;
        res.end('<h1>About Us</h1><p>This is about Priyanka</p>');
    }
    else if(req.url === '/contact') {
        res.statusCode = 200;
        res.end('<h1>Contact Us</h1><p>Feel free to reach out!</p>');
    }
    else {
        res.statusCode = 404;
        res.end('<h1>404 Not Found</h1><p>The page you are looking for does not exist.</p>');
    }
})

server.listen(port, () => {
    console.log(`Server running on ${port}`);
});