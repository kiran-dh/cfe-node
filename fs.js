const fs = require("fs");
 
fs.open("input.txt","r+");

const buffer = new Buffer.alloc(1024);

fs.read(fd,buffer,0,buffer.length,0);

console.log(buffer.toString("utf-8",0,bytes));

fs.close(fd);

