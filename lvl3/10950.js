const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
const testCase = parseInt(input[0])


for(let i=1; i<=testCase; i++){
    let numArr = input[i].split(' ')
    console.log(parseInt(numArr[0])+parseInt(numArr[1]))
}
