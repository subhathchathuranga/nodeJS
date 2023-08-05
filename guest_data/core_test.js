const fs=require('fs');

fs.writeFileSync("data.txt","Hello");
fs.appendFileSync("data.txt"," world");