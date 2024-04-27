// ------------- BIND -------------

// const anime1 = {
//     title: "Attack on titan",
//     totalSeasons: 5,
// }

// const anime2 = {
//     title: "Death note",
//     totalSeasons: 1,
// }

// function printAnimeInfo() {
//     console.log(`${this.title} has ${this.totalSeasons} seasons`);
// }

// const printAnime1Info = printAnimeInfo.bind(anime1);
// printAnime1Info();

// const printAnime2Info = printAnimeInfo.bind(anime2);
// printAnime2Info();

// const counter = {
//     count: 1,
//     increaseCounter: function () {
//         console.log(this);
//         this.count++;
//     }
// }

// document.querySelector(".btn")?.addEventListener("click", counter.increaseCounter.bind(counter));


// ------------- CALL -------------

// function sayHi(greeting) {
//     console.log(`${greeting}, I'm ${this.name} and I'm ${this.age} yrs old!`);
// }

// const luffy = {
//     name: "luffy",
//     age: 18,
// }

// const zoro = {
//     name: "zoro",
//     age: "24",
// }

// sayHi.call(luffy, "Yo");
// sayHi.call(zoro, "Oi");


// ------------- APPLY -------------

// function sayHi(greeting, goal) {
//     console.log(`${greeting}, I'm ${this.name} and I'm ${this.age} yrs old! I want to be ${goal}`);
// }

// const luffy = {
//     name: "luffy",
//     age: 18,
// };

// const zoro = {
//     name: "zoro",
//     age: 24,
// };

// sayHi.apply(luffy, ["Yo", "King of all pirates!"]);
// sayHi.apply(zoro, ["Oi", "the greatest swordsman!"]);


// const stringArr = ["a", "b", "c"];
// const numArray = [1, 2, 3];

// stringArr.push.apply(stringArr, numArray);


// const nums = [34, 346, 35, 546, 23];
// console.log(Math.max.apply(null, nums));