var a = 1

function foo() {
    console.log('Console one: ', a) // undefined
    var a = 2
    console.log('Console two: ', a) // 2
}

foo()

console.log('Console three: ', a) // 1