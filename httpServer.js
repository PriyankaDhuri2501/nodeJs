const http = require('http');
const console = require('console');

const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>This is Priyanka</h1> <p> This is the way to rock the World</p>');
})

server.listen(port, () => {
    console.log(`Server running on ${port}`);
});