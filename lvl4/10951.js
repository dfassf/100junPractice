let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

for(let i=0; i<input.length-1; i++){
    let cases = input[i].split(' ')
    let A = parseInt(cases[0])
    let B = parseInt(cases[1])
    console.log(A+B)
}
