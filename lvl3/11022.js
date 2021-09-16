var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');

let gaesu = parseInt(input[0])
let answer = ''

for(i=1; i<=gaesu; i++){
    let acase = input[i].split(' ')
    let A = parseInt(acase[0])
    let B = parseInt(acase[1])
    answer += `Case \#${i}\: ${A} + ${B} = ${A+B} \n`

}

console.log(answer)