let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')


let listNum = Number(input[0])
let subjects = input[1].split(' ').map(Number)
let standard = 0
let sum = 0


for(let i=0; i<listNum; i++){
    if(subjects[i]>standard){
        standard = subjects[i]
    }
    sum += subjects[i]
}

let average = sum/listNum
console.log(average/standard*100)
