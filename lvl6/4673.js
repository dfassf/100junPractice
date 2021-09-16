let initArr = []
let ansArr = []
for(let i = 1; i<=10000; i++){
    initArr.push(i)
    ansArr.push(d(i))
}

function d(n){
    let arr = []
    let stringNum = String(n)
    arr.push(n)
    for(let i = 0; i<stringNum.length; i++){
        arr.push(parseInt(stringNum[i]))
    }
    let sum = arr.reduce((a,b)=>a+b)
    return sum
}

let answer=  initArr.filter(x=>!ansArr.includes(x))

for(let i = 0; i<answer.length; i++){
    console.log(answer[i])
}