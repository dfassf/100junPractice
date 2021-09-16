// let input=require('fs').readFileSync('/dev/stdin').toString().trim()

let input = 'Mississipi'
let wordArr = input.split('').map(x=>x.toLowerCase())
let arr = []

for(let i =97; i<123; i++){
    arr.push({letter:String.fromCharCode([i]), idx: i, score: 0})
}


for(let i = 0; i<wordArr.length; i++){
    for(let j = 0; j<arr.length; j++){
        if(wordArr[i]===arr[j].letter){
            arr[j].score ++
        }
    }
}

let asd = arr.filter(x=>!x.score==0)


let maxNum = {letter: '', num: 0}
let ans = ''
for(let i = 0; i<asd.length; i++){
    if(asd[i].score>maxNum.num){
        maxNum.num = asd[i].score
        maxNum.letter = asd[i].letter
    }
    ans = asd[i].letter
}
let cawnsol = ''
for(let i = 0; i<asd.length; i++){
    if(asd[i].score === maxNum.num && asd[i].letter !== maxNum.letter){
        cawnsol = '?'
        break
    }else{cawnsol = maxNum.letter.toUpperCase()}
}

console.log(cawnsol)