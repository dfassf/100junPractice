let input = require('fs').readFileSync('/dev/stdin').toString().split(' ')

let fixedCost = Number(input[0])
let costPerPc = Number(input[1])
let price = Number(input[2])

let i = 1

if(price<=costPerPc){
    console.log(-1)
}else{
    console.log(Math.floor(fixedCost/(price-costPerPc))+1)
}