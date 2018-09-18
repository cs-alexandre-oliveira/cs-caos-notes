function ternary(value) {
    return "The fee is " + (value ? "$2.00" : "$10.00")
}

var a = 1
var b = 2

var n = a - b
console.log('N= ',n)

console.log(ternary(true))

console.log(ternary(false))

console.log(ternary(-1))

console.log(ternary(!n))

console.log('cnvertendo para boolean', !n, Boolean(n))

var elvisLives = Math.PI > 0 ? "Yep" : "Nope";

console.log('Elvis', elvisLives)
