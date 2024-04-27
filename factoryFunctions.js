const createUser = (firstName, lastName, age, isEmployed) => {
    return {
        firstName,
        lastName,
        age,
        income: isEmployed ? 20_000 : 0,
        introduce: function() {
            const message = isEmployed 
                ? `Hello, I'm ${firstName} ${lastName}. I'm ${age} years old and I work as a broadcaster!`
                : `Hello, I'm ${firstName} ${lastName}. I'm ${age} years old and I'm still unemployed!`
            return message;
        }
    };
};

let user1 = createUser("Abhishek", "Roy", 34, true);
let user2 = createUser("Ronak", "Deshmukh", 20, false);

const intro1 = user1.introduce;
const intro2 = user2.introduce;

// will correctly logs the message as no "this" is involved
console.log(intro1());
console.log(intro2());
