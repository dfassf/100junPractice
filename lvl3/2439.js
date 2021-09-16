let input = require('fs').readFileSync('/dev/stdin').toString()
let num = parseInt(input)
for(let i=1; i<=num; i++){
    let A = ' '
    let B = '*'
    console.log(`${A.repeat(num-i)}${B.repeat(i)}`)
}