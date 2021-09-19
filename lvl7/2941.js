// let input = require('fs').readFileSync('/dev/stdin').toString()
let input = 'dz=d-d-dz=dddz=z=s=z=z'

let gatsu = 0 
let arr = ['c=','c-','dz=','d-','lj','nj','s=','z='] 
let newInput = input
let i = 0

for(let i = 0; i<arr.length; i++){
    while(input !== input.replace(arr[i],'')){
        gatsu += 1
        input = input.replace(arr[i],' ')
    }
}

console.log(gatsu + input.split(' ').join('').length)
