foo()
function foo() {
    console.log('bar')
}


//boo()
//var boo = function() {} // boo is not a function

function varzaum() {
    var x = 31
    // var x = 13 //Dont broken
    if(true) {
        var x = 71
        console.log('Varzaum the same var value: ', x)
    }
    console.log('varzaum the same var value: ', x)
}
varzaum()

function letzaum()  {
    let z = 31
    //let z = 2  // broke because let already gone referenced
    if(true) {
        let z = 71
        console.log('Letzaum inside of if ', z)
    }
    console.log('Letzaum out of if', z )
}
letzaum()

//When is used LET isnt done the hoisting of variable

// function footLet() {
//     console.log('Console footLet: ', bar)//ReferenceError
//     let bar = 3
// }

// footLet()

function footVar() {
    console.log('Console footVar: ', bar)//undefined
    var bar = 2
}
footVar()