const fs = require('fs');

// let values = [];
fs.readFile('data.txt','UTF-8',(err,data)=>{
    if(err){
        throw err;
    }

    const lines = data.toString().trim().split('\r\n');

    const number = lines.map(Number);

    const oddNum = number.filter(num => num%2 === 1);

    console.log('Odd Numbers',oddNum);
    // values.push(data.split(/\r?\n/));
    // values.forEach(value=>{
    //     value.map(val=>parseInt(val)).forEach(val=>{
    //         if(val%2 === 0 ) {
    //             console.log("Even",val);
    //         }else {
    //             console.log("Odd",val);
    //         }
    //     })
    // })
})