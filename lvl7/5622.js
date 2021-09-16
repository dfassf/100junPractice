let input = require('fs').readFileSync("/dev/stdin").toString().trim().split('').map(x=>x.charCodeAt(0))
let characters = []

let i = 0;
let j = 2;

while(true){
    characters.push({num: String.fromCharCode(i+65), idx: i+65, dial: j})
    i++
    if(i<17 && i%3===0){
        j++
    } else if(i >=17 && i<24 && i%3===1){
        j++
    }else if(i>=24 && i%3===2){
        j++
    }
    if(i+65 === 91){
        break;
    }
}

function test (idx){
    for(let i = 0; i<characters.length; i++){
        if(idx === characters[i].idx){
            return characters[i].dial
        }
    }
}
let sum = input.length
for(let i = 0; i<input.length; i++){
    sum += test(input[i])

}

console.log(sum)