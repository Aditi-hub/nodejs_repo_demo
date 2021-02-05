const http = require('http').createServer();

const fs = require('fs');

http.on('request',(req, res)=>{
    switch(req.url){
        case '/products':
            res.writeHead(200,{'Content-Type':'text/html'})
            res.end(JSON.stringify({id:1,'name':'IPHONE'}))
            break
        
        case '/index':
        case '/about':
            res.writeHead(200,{'Content-Type':'text/html'})
            res.end(fs.readFileSync(`./mods/${req.url}.html`))
            break

        case '/':
            res.writeHead(301,{'Location':'https://www.google.com'})
            res.end()
            break

        default:
            res.writeHead(404,{'Content-Type':'text/html'})
            res.end('<h3>Page Not Found</h3>')
            break 
    }
})


http.listen(8086,'localhost',()=>{
    console.log('server started');
})