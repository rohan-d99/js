function UserConstructor(firstName, lastName, age, isEmployed) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.isEmployed = isEmployed;
    this.income = isEmployed ? 20_000 : 0;
}

UserConstructor.prototype.introduce = function() {
    const message = this.isEmployed 
        ? `Hello, I'm ${this.firstName} ${this.lastName}. I'm ${this.age} years old and I work as a broadcaster!`
        : `Hello, I'm ${this.firstName} ${this.lastName}. I'm ${this.age} years old and I'm still unemployed!!`;

    return message;
}

let user1 = new UserConstructor("Abhishek", "Roy", 34, true);
let user2 = new UserConstructor("Ronak", "Deshmukh", 20, false);

const intro1 = user1.introduce;
const intro2 = user2.introduce;

// will result in undefined as method is called independently without any "this" reference
console.log(intro1(user1));
console.log(intro2(user2));
