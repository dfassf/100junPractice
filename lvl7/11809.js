let input = require('fs').readFileSync('/dev/stdin').toString().split('')

let answer = ''

for(let i = 97; i<123; i++){
    let asciii = String.fromCharCode(i)
    answer += `${String(input.indexOf(asciii))} `
}

console.log(answer.substr(0,answer.length-1))