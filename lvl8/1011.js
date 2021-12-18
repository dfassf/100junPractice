// const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').trim()

const input = `3
0 3
1 5
45 50`
let cnt = Number(input.shift())
let x
let y
let a
let b 
let arr = []

for(let i = 0; i<cnt; i++){
    let answer 
    input[i] = input[i].split(' ')
    x = Number(input[i][0])
    y = Number(input[i][1])
    if(Math.sqrt(y-x)%1 === 0){
        answer = 2 * Math.sqrt(y-x) - 1
    } else{
        a = Math.pow(Math.ceil(Math.sqrt(y-x)), 2)
        b = Math.pow(Math.ceil(Math.sqrt(y-x)-1),2)+1
        if((a+b)/2 <= y-x){
            answer = 2 * Math.ceil(Math.sqrt(y-x)) - 1
        } else{
            answer = 2 * Math.ceil(Math.sqrt(y-x)) - 2
        }
    }
    arr.push(answer)
    console.log(arr[arr.length-1])
}