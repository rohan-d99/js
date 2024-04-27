// APPROACH-1 using object literals
// const appConfig = {
//     appName: "My Jira Board",
//     port: 3000,
// };

// // disables all operations on appConfig instance
// Object.freeze(appConfig)

// appConfig.port = 5000; // NOT ALLOWED
// appConfig.appName = "Frontend Ecosystem"; // NOT ALLOWED


// APPROACH-1 using classes
// class AppConfig {
//     constructor(appName, port) {
//         this.appName = appName;
//         this.port = port;
//     }

//     getAppName() {
//         return this.appName;
//     }

//     getPort() {
//         return this.port;
//     }
// }

// // instance1 is immutable
// const instance1 = new AppConfig("Kanban Board", 3000);
// Object.freeze(instance1);
// instance1.appName = "heads";

// // instance2 is immutable
// const instance2 = new AppConfig("Sunburst area", 5000);
// Object.freeze(instance2);
// instance2.appName = "tails";

// console.log(instance1, instance2);




// APPROACH-2 using classes
class AppConfig {
    constructor() {
        if (!AppConfig.instance) {
            this.appName = "Shire sunburts",
            this.port = 3000;
            Object.freeze(this);

            AppConfig.instance = this;
        }

        return AppConfig.instance;
    }
}

const app1 = new AppConfig();
const app2 = new AppConfig();
app1.appName = "New Cargo";
app2.appName = "Shire city";
console.log("app1", app1);
console.log("app2", app2);
