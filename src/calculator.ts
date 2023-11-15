const calculator = {
    add: (num1: number, num2: number = 0): number => {
        return num1 + num2;
    },

    subtract: (num1: number, num2: number = 0): number => {
        return num1 - num2;
    },

    divide: (num1: number, num2: number = 1): number => {
        if (num2 === 0) {
            throw new Error("Cannot divide by zero");
        }
        return num1 / num2;
    },

    multiply: (num1: number, num2: number = 1): number => {
        return num1 * num2;
    },
};

export { calculator };
