let input = 11
let cnt = 0


while(true){
    // 5로 나눠준다
    if(input%5 === 0){
        console.log(input/5 + cnt)
        break
    }
    if(0>input){
        console.log(-1)
        break
    }

    cnt++
    input -=3 
}