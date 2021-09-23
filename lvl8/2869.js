
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

