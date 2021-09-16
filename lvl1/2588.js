const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

const A = parseInt(input[0])
const splitB = input[1].split('')
const B = parseInt(input[1])


console.log(A*parseInt(splitB[splitB.length-1]))
console.log(A*parseInt(splitB[splitB.length-2]))
console.log(A*parseInt(splitB[splitB.length-3]))
console.log(A*B)