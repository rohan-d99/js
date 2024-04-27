// ------- EXAMPLE-1 -------
const printData = (data) => {
    console.log("Processing Data....");
    console.log(data);
};

const fetchData = (url, callback) => {
    fetch(url)
        .then(res => res.json())
        .then((data) => callback(data))
        .catch(error => console.error(error));
};

fetchData('https://jsonplaceholder.typicode.com/todos/1', printData);
