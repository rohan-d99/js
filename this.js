const me = {
    name: "rohan",
    age: 23,
    getName: function() {
        console.log(this.name);
    },
    getAge: () => {
        console.log(me.age);
    }
}

me.getName() // "rohan"
me.getAge() // undefined;

// ----------------------------------------

// var scope = "global";

// function getScope() {
//     var scope = "function";
//     return this.scope;
// }

// console.log(getScope());

// -------------------- 'THIS' WITH OBJECTS --------------------
// const Person = {
//     name: 'Rohan',
//     sayHello: function() {
//         console.log(`Hello, my name is ${this.name}`);
//     },
//     logThis: function() {
//         console.log(this);
//     }
// };

// Person.sayHello(); // Hello, my name is Rohan
// Person.logThis(); // refers to object properties

// const personHello = Person.sayHello;
// const personThis = Person.logThis;
// personHello() // Hello, my name is ''. Fix it with either by making it arrow function or using bind method
// personThis(); // refers to window / global object as called independently


// -------------------- 'THIS' WITH ARROW FUNC --------------------
// const Pet = {
//     name: 'Chonks',
//     breed: 'cat',
//     printName: () => {
//         console.log(this.name);
//     }
// };

// function outerFunction() {
//     const innerFunction = () => {
//         console.log(this.name);
//     }

//     innerFunction();
// }

// const helperObj = {
//     name: "This is cool!",
// }

// Pet.printName();
// outerFunction.call(helperObj);


// -------------------- 'THIS' WITH CONSTRUCTOR FUNC --------------------
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.sayHi = function() {
//     console.log(`Hi, I'm ${this.name} and I'm ${this.age} yrs old!`);
// };

// const Angie = new Person("Angie", 31);
// const Kyle = new Person("Kyle", 29);

// Angie.sayHi();
// Kyle.sayHi();