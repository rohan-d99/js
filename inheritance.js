// class Book {
//     constructor(name, author) {
//         this.name = name;
//         this.author = author;
//     }
// }

// const book1 = new Book("Alchemist", "Paulo Coelho");
// const book2 = new Book("The monk who sold his ferrari", "Robin Sharma");

// book1.pages = 30;

// console.log(book1, book2);


const activities = new Function();
activities.prototype.talk = () => "Talking";

const me = new activities();


console.log(me);
