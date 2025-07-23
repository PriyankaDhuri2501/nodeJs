var http = require('http');

http.createServer((req, res)=>{
    res.writeHead("200","not ok")
    res.write("Hello World!!!")
    res.end()
})
.listen("8080")