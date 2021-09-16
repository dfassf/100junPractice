let input = parseInt(require('fs').readFileSync('/dev/stdin').toString())
let newNum = input
let sum 
let i=0;
while(true){
    i++
    sum = Math.floor(newNum/10)+newNum%10
    newNum = (newNum%10)*10+sum%10
    if(newNum===input){
        break
    }
}
console.log(i)
