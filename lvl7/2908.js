let input = require('fs').readFileSync('/dev/stdin').toString().split(' ')

let a = input[0].split('')
let b = input[1].split('')

let newA = a.reverse().join('')
let newB = b.reverse().join('')

console.log(Math.max(newA,newB))