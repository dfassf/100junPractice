let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

for(let i=1; i<=parseInt(input); i++){
    let star = '*'
    console.log(star.repeat(i))
}