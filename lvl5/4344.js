let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

for(let i = 1; i<input.length; i++){
    let count = 0
    let row = input[i].split(' ')
    let sumPerRow = 0
    for(let j = 1; j<row.length; j++){
        sumPerRow += Number(row[j])
    } 

    average = sumPerRow/(row.length-1) 
    for(let j = 1; j<row.length; j++){
        if(row[j]>average){
            count++
        }
    } 
    let result = (count/(row.length-1)*100).toFixed(3)
    console.log(`${result}%`)
    
}