const fs = require('fs');

const path = require('path');

fs.readdir('../nodejsdemo', (err, files)=>{
    if(err){
        throw err;
    }

    files.forEach(file =>{
        const filePath = path.basename(file);
        if(filePath === 'shape.js'){
            fs.readFile(`../nodejsdemo/${filePath}`,'UTF-8',(err,data)=>{
                if(err){
                    throw err;
                }
                console.log(data);
            })
        }
    })
    console.log(files);
})