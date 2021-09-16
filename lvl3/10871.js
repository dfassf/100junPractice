let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let partA = input[0].split(' ')
let partB = input[1].split(' ')

let repeatNum = parseInt(partA[0])
let compNum = parseInt(partA[1])
let answer = ''

for(let i=0; i<repeatNum; i++){
    let num = parseInt(partB[i])
    if(num<compNum){
        answer += `${num} `
    }
}
let answer2 = answer.substr(0,answer.length-1)

console.log(answer2)