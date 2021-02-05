const http = require('http');
const server = http.createServer((req, res)=>{
    res.writeHead(201, {'Content-Type':'text/html'})
    res.write('<h2>Welcome To NodeJs Server</h2>')
    res.end()
})
server.listen(8082,"localhost",()=>{
    console.log('server ready')
})
