let input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

 let nums = input.map(Number)
 let total = String(nums[0]*nums[1]*nums[2])
 
 for(let i=0; i<=9; i++){
     let count = 0
     for(let j=0; j<total.length; j++){
         if(total[j]==i){
             count++
         }
     }
     console.log(String(count))
 }
