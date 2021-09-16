let a=require('fs').readFileSync('/dev/stdin').toString()
let n=Number(a)
let an
n<100 ? an=n : an=99
for(let i=100; i<=n; i++){
    let j=String(i)
    if(j[0]-j[1]==j[1]-j[2]){
        an++
    }
}
console.log(an)
