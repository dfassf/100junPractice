let input=require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

for(let i = 1; i<=Number(input[0]); i++){
    let row = input[i].split(' ')
    let chr = row[1].split('')
    let ansPerRow = ''
    for(let j = 0; j<chr.length; j++){
        ansPerRow += chr[j].repeat(row[0])
    }
    console.log(ansPerRow)
}