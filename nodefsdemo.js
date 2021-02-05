const fs = require('fs');

//Sync Reading file
// const files = fs.readdirSync('../nodejsdemo');
// console.log(files);
// console.log('im executed');


//Async reading file
fs.readdir('../nodejsdemo', (err, files)=>{
    if(err){
        throw err;
    }
    console.log(files);
})
console.log('im executed');