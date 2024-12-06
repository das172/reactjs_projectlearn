const http = require("http")

const hostname = '127.0.0.1';
const port = 3000

const server = http.createServer((req,res)=>{
    if (req.url === '/') {
        res.statuscode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end("hello its done btw")
    }else if (req.url ==='/ice-tea') {
        res.statuscode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end("thanks")

        
    } else {
        res.statuscode = 404
        res.setHeader('Content-Type', 'text/plain')
        res.end("404,not found")
        
    }
})

server.listen(port,hostname,()=>{
    console.log(`Server is listening at http://${hostname}:${port}`)
})