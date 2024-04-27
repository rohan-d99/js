function a() {
    const no1 = 10;
    return function b() {
        const no2 = 2;
        return function c() {
            const no3 = 3;
            console.log("Addition is:", no1 + no2 + no3);
        }
    }
}

const b = a();
const c = b();
c();