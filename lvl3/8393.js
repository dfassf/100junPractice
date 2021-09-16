const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString()

let a = 0

for(let i=1; i<=parseInt(input); i++){
    a += i
}

console.log(a)