// let input = require('fs').readFileSync('/dev/stdin').toString().split('')

let input ='c=c='
let gatsu = 0 //중복값 제거하지 않음
let arr = ['c=','c-','dz=','d-','lj','nj','s=','z='] 
let test = [] //중복값 제거함

for(let i = 0; i<arr.length; i++){
    let trial = input.split(arr[i])
    console.log(trial)
    if(trial.includes('')){
        console.log(trial, 'this this')
        gatsu++
    }
}

for(let i = 0; i<arr.length; i++){
    if(input.indexOf(arr[i])!==-1){gatsu++}
}

// console.log(input.length)
console.log(test)
console.log(gatsu)
// console.log(howMany.length)

// console.log('answer', input.length-(gatsu-howMany.length)*2)
