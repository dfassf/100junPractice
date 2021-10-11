const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const howMany = parseInt(input.shift()); 

for (let i = 0; i < howMany; i++) {
  const arr = input[i].split(' ');
  let height = parseInt(arr.shift());
  arr.shift(); 
  let number = parseInt(arr.shift()); 
  let cnt = 1; 
  
  while (number > height) {
    cnt++;
    number = number - height;
  } 
  if (cnt < 10) {
    console.log(`${number}0${cnt}`);
  } else {
    console.log(`${number}${cnt}`);
  }
}
