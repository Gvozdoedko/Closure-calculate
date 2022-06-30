const closureCalculate = (e) => {
    let result = e;
    const calculator = {
        add(num) {
            result += num;
        },
        sub(num) {
            result -= num;
        },
        div(num) {
            result /= num;
        },
        mult(num) {
            result *= num;
        },
        getResult() {
            return result;
        },
    };
    return calculator;
};

const first = closureCalculate(4);

first.add(33);
first.sub(12);
first.div(2);
first.mult(4);

console.log(first.getResult());
