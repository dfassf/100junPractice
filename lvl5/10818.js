let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let num = input[0]
let targetArr = input[1].split(' ')

let minNum = parseInt(targetArr[0])
let maxNum = parseInt(targetArr[0])

for(let i=0; i<parseInt(num); i++){
    if(parseInt(targetArr[i])<=minNum){
        minNum = targetArr[i]
    }
    if(parseInt(targetArr[i])>=maxNum){
       maxNum = targetArr[i]
       }
}
console.log(`${parseInt(minNum)} ${parseInt(maxNum)}`)



