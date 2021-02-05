const express = require('express')
const cors = require('cors')

const fs = require('fs')
const app = express();
app.use(cors())

app.get('/countrystates',(req,res)=>{
   
           
            const jsonData=JSON.parse(fs.readFileSync('../data/countrystates.json','UTF-8'))
            res.json(jsonData)
            
            

    })
app.listen(8086,'localhost',()=>console.log('server started'));

    

// M -> Cassandra
// E -> Express
// A
// N -> NodeJs



