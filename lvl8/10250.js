// const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')
const input = `2
6 12 10
30 50 72`.split('\n')
const howMany = Number(input.shift())

for(let i = 0; i<howMany; i++){
    let height = Number(input[i].split(' ').shift())
    input[i].split(' ').shift()
    let number = Number(input[i].split(' ').shift())
    let cnt = 1

    while(number>height){
        cnt++
        number -= height
    }

    if(cnt<10){
        console.log(`${number}0${cnt}`)
    } else{ console.log(`${number}${cnt}`)}
}