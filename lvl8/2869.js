/*
let input = '100 99 1000000000'
let a = Number(input.split(' ')[0])
let b = Number(input.split(' ')[1])
let v = Number(input.split(' ')[2])

// 최초에 풀었던 방식, 시간초과 뜸

// let n = 0
// let result = 0
// while(true){

//     n++
//     result += a
//     if(result>=v){break}
//     result -= b

// }
// console.log(n)

console.log(Math.ceil((v-b)/(a-b)))
*/

let input = '2 1 5'.split(' ')

let day = 1
let height = 0
const A = Number(input[0])
const B = Number(input[1])
const V = Number(input[2])

while(height<=V){

    // 높이가 어느 정도 수준이 되면
    height += A
    // 올라간 높이 추가
    if(height>=V){
    // 낮에 올라간 높이가 나무보다 같거나 크면 종료
        break
    } else{
    // 그렇지 않으면 밤에 미끄러짐
        height -= B
    }
    // 하루가 지나간다.
    day ++
}

console.log(day)