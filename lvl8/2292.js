// let input = Number(require('fs').readFileSync('dev/stdin').toString().trim())
let input = Number('58')
let n = 1
let sum = 1
let howMany = 1
while(true){
    sum += 6*n
    n++
    if(sum>input){
        break
    }
 
}
console.log(n)
