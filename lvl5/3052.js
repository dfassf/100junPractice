let initInput = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let newArr = []
let input = initInput.map(x=>Number(x)%42)
for(let i=0;i<input.length;i++){
    if(newArr.indexOf(input[i])==-1){
       newArr.push(input[i])
       }
}

console.log(newArr.length)