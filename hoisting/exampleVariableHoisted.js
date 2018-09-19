try {
    console.log('Should print value of A: ', a)
} catch(e) {
    console.log('The variable A dont was defined.')
}

try {
    console.log('Should print value of B: ', b)
    var b = 2
} catch(e) {
    console.log('The variable A dont was defined.')
}

try {
    var c
    console.log('Should print value of C: ', c)
    var c = 2
} catch(e) {
    console.log('The variable A dont was defined.')
}

//Only the declaration of a variable is hoisted, dont your inicialization