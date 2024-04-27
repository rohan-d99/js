// callback functions, passed as parameter to a higher order function
const area = (radius) => Math.PI * radius * radius;
const circumference = (radius) => 2 * Math.PI * radius;
const diameter = (radius) => 2 * radius;

// higher order function
const calculate = (arr, logic) => {
    const output = [];

    for (let i = 0; i < arr.length; i++) {
        output.push(logic(arr[i]));
    }

    return output;
}

// one liner
// const calculate = (arr, logic) => arr.map(logic);

const radius = [4,6,1,3,8];

console.log("area of circles", calculate(radius, area));
console.log("circumference of circles", calculate(radius, circumference));
console.log("diameter of circles", calculate(radius, diameter));


// TOPICS - higher order funciton, closures
// A JS function which will be executed only once
const once = (func) => {
    let hasRun = false;
    let result;

    // returns a function which accepts any number of args
    return function(...args) {
        if (!hasRun) {
            hasRun = true;
            result = func(...args);
        }

        return result;
    };
};

// callback function
const greet = (name) => {
    return `Hello ${name}!`
}

// the function returned by once will be executed only once
const greetOnce = once(greet);

console.log(greetOnce("Rohan"));
// as hasRun got changed to TRUE, result will be returned without invoking the function
console.log(greetOnce("Aniket"));
