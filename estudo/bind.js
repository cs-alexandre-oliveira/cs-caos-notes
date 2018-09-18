function sayHello(target) {
    console.log('Hello ' +  target + '!')
}

function sayBye(target) {
    console.log('Bye ' + target + '!')
}

// sayHello('Alexandre')
// sayBye('Alexandre')

var people = {
    name: 'Fulano',

    sayHello: function sayHello(target) {
        console.log(this.name + ' says: Hello ' +  target + '!')
    },
    
    sayBye: function sayBye(target) {
        console.log(this.name + ' says: Bye ' + target + '!')
    }
}

people.sayBye('Ale')

var otherPeople = { name: 'Beltrano' }


var bindSay = people.sayHello.bind(otherPeople)

// bindSay('Marcus')

// people.sayHello.call(otherPeople, 'Marcus')

// people.sayHello.apply(otherPeople, ['Marcus'])

// bind, call, apply usam o this da function.


var meuArray = [1, 2, 3]

meuArray.forEach(console.log)

var minhaString = 'eita'

meuArray.forEach.call(minhaString, console.log)
