import { describe, test, expect } from "vitest";
import { calculator } from "../calculator";

describe("Calculator will", () => {
    test("Correctly add two numbers", () => {
        const result = calculator.add(2, 3);
        expect(result).toBe(5);
    });

    test("Correctly subtract two numbers", () => {
        const result = calculator.subtract(5, 3);
        expect(result).toBe(2);
    });

    test("Correctly divide two numbers", () => {
        const result = calculator.divide(6, 2);
        expect(result).toBe(3);
    });

    test("Throw an error when dividing by zero", () => {
        expect(() => calculator.divide(6, 0)).toThrow("Cannot divide by zero");
    });

    test("Correctly multiply two numbers", () => {
        const result = calculator.multiply(2, 3);
        expect(result).toBe(6);
    });


});
