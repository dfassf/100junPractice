const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = parseInt(input.shift());
let counter = 0;
 
function checkGroupWord(str) {
    const checker = [];
 
    for (let i = 0; i < str.length; i++) {
        if (checker.indexOf(str[i]) === -1) {
        checker.push(str[i]);
        } else {
            if (checker[checker.length - 1] !== str[i]) {
            return;
            }
        }
    }
    counter++;
}
 
for (let i = 0; i < N; i++) {
checkGroupWord(input[i]);
}
 
console.log(counter);