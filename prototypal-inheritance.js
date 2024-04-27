// const humanActivities = {
//     talk: () => {
//         return "Talking";
//     },

//     walk: () => {
//         return "Walking";
//     },

//     laugh: () => {
//         return "laughing";
//     },

//     cry: () => {
//         return "crying";
//     }
// };

// const superHumanMe = {
//     fly: () => {
//         return "flying";
//     },
//     __proto__: humanActivities,
// };

// console.log(superHumanMe);

// ------------------

// function Person(name) {
//     this.name = name;
// }

// Person.prototype.sayHi = function () {
//     return `Hello there! My name is ${this.name}.`;
// }

// const person1 = new Person("Jimmy");
// const person2 = new Person("Kim");


// console.log(person1, person2);
// console.log(Object.getPrototypeOf(person1) === Person.prototype);


// PROTOTYPE CHAIN

const tail = {
    hasTail: true,
}

const pet = Object.create(tail);
pet.legs = 4;

const cat = Object.create(pet);
cat.sound = "Meowwww..";
console.log(cat.hasTail);
console.log(cat.legs);
console.log(cat.sound);