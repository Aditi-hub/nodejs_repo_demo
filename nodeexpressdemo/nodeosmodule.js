const { Console } = require('console');
const os = require('os');
console.log("Free Memory-",os.freemem());
console.log("Total Memory-",os.totalmem());
console.log("OS Architecture-",os.arch());
console.log("OS CPUS-",os.cpus());