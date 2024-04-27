const GITHUB_API = "https://api.github.com/users/rohan-d99";
const JSON_PLACEHOLDER_API = "https://jsonplaceholder.typicode.com/todos/1";

const fetchTodos = async () => {
    try {
        const response = await fetch(JSON_PLACEHOLDER_API);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
};

const fakeRequest1 = (delay = 10000) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ message: "fake request 1 resolved" });
        }, delay);
    });
};

const fakeRequest2 = (delay = 10000) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ message: "fake request 2 resolved" });
        }, delay);
    });
};

const makeRequest = async () => {
    const req1 = await fakeRequest1();
    console.log("req1 executed");
    console.log(req1);

    const req2 = await fakeRequest2(5000);
    console.log("req2 executed");
    console.log(req2);

    // const results = await Promise.all([fakeRequest1(), fakeRequest2(5000)]);
    // console.log("All requests completed!");
}

const getData = async () => {
    await makeRequest();
    console.log("Preparing Breakfast!")
};

getData()

// fetchTodos()
//     .then((res) => console.log(res))
//     .catch((error) => console.error(error));
