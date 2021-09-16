let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

for(let i = 1; i<input.length; i++){
    let score = 0
    let row = 0
    for(let j = 0; j<input[i].length; j++){        
        if(input[i][j]==='O'){
            row++
        }else{row = 0}
        score += row
    }
    console.log(score)
}

