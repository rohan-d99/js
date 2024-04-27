hello();
hello2();
hello3();

function hello() {
    console.log("Hello..");
}

let hello2 = function () {
    console.log("Hello 2..");
}

let hello3 = () => {
    console.log("Hello 3..");
}

// ----------------------

const initApp = () => {
    helloWorld();
}

document.addEventListener("DOMContentLoaded", initApp);

const helloWorld = () => {
    console.log("Hello world");
}