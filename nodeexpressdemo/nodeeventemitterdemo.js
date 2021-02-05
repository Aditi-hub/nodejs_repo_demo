const fs = require('fs');

const { EventEmitter } = require('events');
const readableStream = fs.createReadStream('data.txt');
const writableStream = fs.createWriteStream('data1.txt');
readableStream.pipe(writableStream);

console.log(readableStream instanceof EventEmitter);

console.log(writableStream instanceof EventEmitter);

readableStream.on('data', (data) => console.log(data.toString().trim()));
readableStream.on('end', () => console.log('close'));
readableStream.on('start', () => console.log('begin'));
readableStream.on('error', (reason) => console.log(reason));