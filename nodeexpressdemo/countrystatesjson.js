const http = require('http').createServer();

const fs = require('fs');

http.on('request',(req, res)=>{
    switch(req.url){
        case '/countrystates.json':
            res.writeHead(200,{'Content-Type':'application/json'})
            var jsonData = fs.readFileSync('../data/countryStates.json','UTF-8')
            res.end(JSON.stringify(JSON.parse(jsonData),null ,2))
            break;
        
            default:
                res.writeHead(404,{'Content-Type':'text/html'})
                res.end('<h3>Page Not Found</h3>')
                break 
    
    
    }
})

http.listen(8086,'localhost',()=>{
    console.log('server started');
})