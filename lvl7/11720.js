let input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

let answer = 0
for(let i = 0; i<Number(input[0]); i++){
    let arr = input[1].split('').map(Number)
    answer += arr[i]
}

console.log(answer)