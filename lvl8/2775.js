// // let input = require('fs').readFileSync('/dev/stdin').toString()
// let input = `2
// 1
// 3
// 2
// 3`
// let pcs = input.trim().split('\n')
// let casee = Number(pcs.shift())
// let testArr = []

// for (let i = 0; i<casee; i++){
//     let arr = []
//     arr.push(Number(pcs[i*casee]))
//     arr.push(Number(pcs[i*casee+1]))
//     testArr.push(arr)
// }

// let k 
// let n
// let floor = []
// let add = 0
// for(let i = 0; i<testArr.length; i++){
//     // 실험체 만큼 반복
//     k = testArr[i][0]
//     n = testArr[i][1]
//     for(let j = 0; j <=k; j++){
//         floor[j] = []
//         for(let l = 1; l <= n; l++){
//             if(j === 0){
//                 floor[j].push(l)
//             } else{
//                 add += floor[j-1][l-1]
//                 floor[j].push(add)
//                 if(l===n){
//                     add = 0
//                 }
//             }
//         }
//     }
//     console.log(floor[k][n-1]);
// } 왜 런타임 오류남...

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let number = Number(input[0]);
input.shift();

let k;
let n;
let array = [];

for(let i = 0; i < number*2 ; i=i+2){
    k = Number(input[i]);
    n = Number(input[i+1]);
    array.push([k,n]);
}

let floor = [];
let sum = 0;
for(let i = 0; i < array.length; i++){

    k = array[i][0];
    n = array[i][1];
    for(let j = 0; j <= k; j++){ 
        floor[j] = [];
        for(let m = 1; m <= n; m++){ 
            if(j === 0){ 
                floor[j].push(m);
            }else{ 
                sum += floor[j-1][m-1];
                floor[j].push(sum);
                if(m === n){
                    sum = 0;
                }
            }
        }
    }
    console.log(floor[k][n-1]);
}