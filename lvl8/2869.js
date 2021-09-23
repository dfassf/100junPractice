
let input = '2 1 5'
let a = input.split(' ')[0]
let b = input.split(' ')[1]
let v = input.split(' ')[2]

// per day = n
// (a-b)*n=v

let n = 1
let height = 0
while(true){
    height += Number(a)
    height -= Number(b)
    
    n ++

    if(height>=Number(v)){break}
}

console.log(n)