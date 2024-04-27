// -------------------- EXAMPLE 1 ----------------------
// function outer() {
//     let outerVal = 10;

//     function inner() {
//         let innerVal = 100;
//         console.log(outerVal + innerVal);
//     }

//     return inner;
// }
``
// let x = outer();

// console.dir(x);

// -------------------- EXAMPLE 2 ----------------------
// TOPICS - higher order funciton, closures
// A JS function which will be executed only once
// const once = (func) => {
//     let hasRun = false;
//     let result;

//     // returns a function which accepts any number of args
//     return function(...args) {
//         if (!hasRun) {
//             hasRun = true;
//             result = func(...args);
//         }

//         return result;
//     };
// };

// // callback function
// const greet = (name) => {
//     return `Hello ${name}!`
// }

// // the function returned by once will be executed only once
// const greetOnce = once(greet);

// console.log(greetOnce("Rohan"));
// // as hasRun got changed to TRUE, result will be returned without invoking the function
// console.log(greetOnce("Aniket"));


// -------------------- EXAMPLE 3 ----------------------
function getCounter() {
    let count = 0;

    return function() {
        return count++;
    }
}

const increaseCount = getCounter();
console.log(increaseCount());
console.log(increaseCount());
console.log(increaseCount());


// -------------------- EXAMPLE 4 ----------------------
// const findWithoutClosures = (index) => {
//     let a = [];
//     for (let i = 0; i < 10000; i++) {
//         a[i] = i * i;
//     }

//     console.log(a[index]);
// }

// const findWithClosures = () => {
//     let a = [];
//     for (let i = 0; i < 1000000; i++) {
//         a[i] = i * i;
//     }

//     return function (index) {
//         console.log(a[index]);
//     };
// }

// const withClosure = findWithClosures();
// console.time("withClosure");
// withClosure(6);
// withClosure(60);
// console.timeEnd("withClosure");

// console.time("withoutClosure");
// findWithoutClosures(6);
// findWithoutClosures(60);
// console.timeEnd("withoutClosure");
