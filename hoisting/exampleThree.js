// This scope change the variable initial A through of if. 

var a =1
console.log('Console of begin A : ', a)// 1

if(true) {
    var a = 2 
    console.log('Console of if A: ', a)// 2
}

console.log('Console after if: ', a)// 2


// This scope keep the variable initial B withouth change. 
var b = 1
console.log('Console of begin B: ', b)

if(true) {
    (function() {
        var b = 2
        console.log('Console function of if B: ', b)
    }())
}
console.log('Console after if of B: ', b)