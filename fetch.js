const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';

// const myTodos = fetch(apiUrl);

// myTodos
//     .then(data => {
//         return data.json();
//     })
//     .then(result => console.log(result));


const myAsyncTodos = async () => {
    try {
        const response = await fetch(apiUrl);
        const myTodos = await response.json();
    
        console.log("Request completed!", myTodos);
    } catch (error) {
        console.error(error);
    }
}

myAsyncTodos(); 