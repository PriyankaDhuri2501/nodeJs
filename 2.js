var http = require('http');

http.createServer((req, res)=>{
    res.writeHead(302,{'Location':'https://www.google.com/'})
    res.write("Hello World!!!")
    res.end()
})
.listen("8080")