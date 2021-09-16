let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
let i=0
let cases = input[i].split(' ')


while(i<input.length){
    let cases = input[i].split(' ')
    let A = parseInt(cases[0])
    let B = parseInt(cases[1])
    if(A!==0 && B!==0){
        console.log(A+B)
    } else{break}
    i++
}
