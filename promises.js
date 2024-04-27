// createOrder , proceedToPayment, showOrderSummary, updateWallet

// let cart = [
//     {
//         item: "Laptop",
//         price: 72_000,
//     },
//     {
//         item: "iPhone 15",
//         price: 1_50_000,
//     },
//     {
//         item: "Apple Watch",
//         price: 50_000,
//     }
// ];
// let walletBalance = 500000;

// const createOrder = (cart) => {
//     return new Promise((resolve, reject) => {
//         if (cart.length > 0) {
//             setTimeout(() => {
//                 const paymentId = Date.now();
//                 resolve(paymentId);
//             }, 2000);
//         } else {
//             const err = new Error("Cart is empty");
//             reject(err);
//         }
//     });
// };

// const proceedToPayment = (paymentId) => {
//     return new Promise((resolve, reject) => {
//         if (paymentId) {
//             setTimeout(() => {
//                 resolve({ paymentStatus: 200, message: "Payment Successfull"});
//             }, 1200);
//         } else {
//             const err = new Error("Invalid Payment ID!");
//             reject(err);
//         }
//     });
// };

// const showOrderSummary = (orderDetails) => {
//     return new Promise((resolve, reject) => {
//         if (orderDetails.paymentStatus === 200) {
//             resolve({ message: "success", items: cart });
//         } else {
//             reject(new Error("Something went wrong while generating order summary"));
//         }
//     });
// };

// const updateWallet = (orderDetails) => {
//     return new Promise((resolve, reject) => {
//         if (orderDetails.message === "success") {
//             const totalBillAmt = orderDetails?.items?.reduce((acc, currVal) => acc + currVal?.price, 0);
//             if (totalBillAmt < walletBalance) {
//                 walletBalance -= totalBillAmt; 
//                 resolve({ walletBalance, message: "Wallet updated" });
//             } else {
//                 reject(new Error("Insufficient Balance!"));
//             }
//         } else {
//             reject(new Error("Something went wrong while updating wallet!"));
//         }
//     });
// };


// createOrder(cart)
//     .then((paymentId) => proceedToPayment(paymentId))
//     .then((orderDetails) => showOrderSummary(orderDetails))
//     .then((orderDetails) => updateWallet(orderDetails))
//     .then((resp) => console.log(resp.message, resp.walletBalance))
//     .catch((error) => console.error(error));


// --------------------------------------------------------


// const fetchGithubProfile = (username) => {
//     return new Promise((resolve, reject) => {
//         fetch(`https://api.github.com/users/${username}`)
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error("Failed to fetch");
//                 }
//                 return response.json();
//             })
//             .then((result) => resolve(result))
//             .catch((error) => reject(error));
//     });
// };

// fetchGithubProfile("rohan-d99")
//     .then((res) => console.log(res))
//     .catch((error) => console.error(error));


// const promise = new Promise((resolve, reject) => {
//     let state = "hasValue";

//     if (state) {
//         resolve("State has value");
//     } else {
//         let error = new Error("State is empty");
//         reject(error);
//     }
// });

// promise
//     .then((response) => console.log(response))
//     .catch((error) => console.error(error));


// ------------  PROMISE.ALL & PROMISE.RACE  ------------
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 1 resolved");
    }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 2 resolved");
    }, 1300);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise 3 resolve");
    }, 2300);
});

// console.time();
// Promise.all([promise1, promise2, promise3])
//     .then((data) => {
//         console.log(data);
//         console.timeEnd();
//     })
//     .catch(error => console.error(error));

// Promise.race([promise1, promise2, promise3])
//     .then((res) => console.log(res))
//     .catch((error) => console.error(error));

// ------------  PROMISE CHAINING  ------------
promise1
    .then((res) => {
        console.log(res);
        return promise2;
    })
    .then((res) => {
        console.log(res);
        return promise3;
    })
    .then((res) => {
        console.log(res);
        return new Promise((resolve) => setTimeout(() => resolve("All done"), 1400));
    })
    .then((res) => {
        console.log(res);
    })
    .catch((error) => {
        console.error("error occured", error);
    });