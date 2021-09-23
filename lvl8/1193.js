
function addNum(n){ // n번째 줄까지의 모든 항목의 합
    let result = 0
    for(let i = 1; i<=n; i++){
        result += i
    }
    return result
}

function whichRow(n){ //몇번째줄
    let j = 1
    while(addNum(j)<n){
        addNum(j)
        j++
    }
    return j
}

let input = 14
let n = 1 


function bunsu(n){
    let bunja
    let bunmo
    if(whichRow(n)%2===0){
        // console.log('짝수')
        bunja = input-addNum(whichRow(input)-1)
        bunmo = whichRow(input)-bunja+1
    } else{
        // console.log('홀수')
        bunmo = input-addNum(whichRow(input)-1)
        bunja = whichRow(input)-bunmo+1
    }
    console.log(bunja,'/',bunmo)
}


bunsu(input)