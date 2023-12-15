import { describe, test, expect } from "vitest";
import { calculator } from "./calculator";

describe("Calculator will", () => {
    test("correctly add two numbers", () => {
        const result = calculator.add(2, 3);
        expect(result).toBe(5);
    });

    test("correctly add two negative numbers", () => {
        const result = calculator.add(-15, -35);
        expect(result).toBe(-50);
    });

    test("correctly subtract two numbers", () => {
        const result = calculator.subtract(5, 3);
        expect(result).toBe(2);
    });

    test("correctly subtract two negative numbers", () => {
        const result = calculator.subtract(-15, -40);
        expect(result).toBe(25);
    });

    test("correctly divide two numbers", () => {
        const result = calculator.divide(6, 2);
        expect(result).toBe(3);
    });

    test("throw an error when dividing by zero", () => {
        expect(() => calculator.divide(6, 0)).toThrow("Cannot divide by zero");
    });

    test("correctly multiply two numbers", () => {
        const result = calculator.multiply(2, 3);
        expect(result).toBe(6);
    });

    test("handle just one argument", () => {
        expect(calculator.add(5)).toBe(5);
        expect(calculator.subtract(10)).toBe(10);
        expect(calculator.multiply(15)).toBe(15);
        expect(calculator.divide(30)).toBe(30);
    });
});
