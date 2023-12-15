import { stringCalculator } from "./string-calculator";
import { describe, expect, test } from "vitest";

describe("string-calculator", () => {
    test("given empty string should return 0", () => {
        const sut = stringCalculator;
        const input = "";
        const expected = 0;
        const actual = sut(input);

        expect(actual).toBe(expected);
    });

    describe("given single number", () => {
        test.each([
            { input: "0", expected: 0 },
            { input: "5", expected: 5 },
            { input: "7", expected: 7 },
            { input: "9", expected: 9 },
        ])("Given $input should return $expected", ({ input, expected }) => {
            const sut = stringCalculator;
            const actual = sut(input);

            expect(actual).toBe(expected);
        });
    });

    describe("given two numbers", () => {
        test.each([
            { input: "0,0", expected: 0 },
            { input: "5,5", expected: 10 },
            { input: "15,35", expected: 50 },
            { input: "99,99", expected: 198 },
        ])("Given $input should return $expected", ({ input, expected }) => {
            const sut = stringCalculator;
            const actual = sut(input);

            expect(actual).toBe(expected);
        });
    });

    describe("given N numbers return correct sum", () => {
        test.each([
            { input: "0,0,0,0,0,0", expected: 0 },
            { input: "5,5,5,5,5", expected: 25 },
            { input: "15,35,60,82,123", expected: 315 },
            { input: "1,2,3,4,5,6", expected: 21 },
        ])("Given $input should return $expected", ({ input, expected }) => {
            const sut = stringCalculator;
            const actual = sut(input);

            expect(actual).toBe(expected);
        });
    });

    describe("ignores numbers bigger than 1000", () => {
        test.each([
            { input: "1000", expected: 1000 },
            { input: "1500,2000", expected: 0 },
            { input: "999,1000,1001", expected: 1999 },
            { input: "999,200,10", expected: 1209 },
        ])("Given $input should return $expected", ({ input, expected }) => {
            const sut = stringCalculator;
            const actual = sut(input);

            expect(actual).toBe(expected);
        });
    });

    describe("handles \\n on the input", () => {
        test("Given 15\\n,5 return 20", () => {
            const input = "15\n,5";
            const expected = 20;
            const sut = stringCalculator;

            const actual = sut(input);

            expect(actual).toBe(expected);
        });

        test("Given \\n2,2 return 4", () => {
            const input = "\n2,2";
            const expected = 4;
            const sut = stringCalculator;

            const actual = sut(input);

            expect(actual).toBe(expected);
        });

        test("Given 0\\n,\\n0 return 0", () => {
            const input = "0\n,\n0";
            const expected = 0;
            const sut = stringCalculator;

            const actual = sut(input);

            expect(actual).toBe(expected);
        });

        test("Given 10,20\\n return 30", () => {
            const input = "10,20\n";
            const expected = 30;
            const sut = stringCalculator;

            const actual = sut(input);

            expect(actual).toBe(expected);
        });
    });

    describe("accept custom delimiters", () => {
        test("given //;\\n1;2 should return 3", () => {
            const input = "//;\n1;2";
            const expected = 3;
            const sut = stringCalculator;

            const actual = sut(input);

            expect(actual).toBe(expected);
        });

        test("given //.\\n1.2 should return 3", () => {
            const input = "//;\n1;2";
            const expected = 3;
            const sut = stringCalculator;

            const actual = sut(input);

            expect(actual).toBe(expected);
        });

        test("given //-\\n1-2-10-20 should return 33", () => {
            const input = "//-\n1-2-10-20";
            const expected = 33;
            const sut = stringCalculator;

            const actual = sut(input);

            expect(actual).toBe(expected);
        });

        test("given //\\n\\n1\\n2\\n999\\n should return 1002", () => {
            const input = "//\n\n1\n2\n999\n";
            const expected = 1002;
            const sut = stringCalculator;

            const actual = sut(input);

            expect(actual).toBe(expected);
        });
    });

    describe("negative numbers should throw", () => {
        test("given -1 should throw", () => {
            const input = "-1";
            const sut = stringCalculator;

            expect(() => sut(input)).toThrow();
        });

        test("given -5,5 should throw", () => {
            const input = "-5,5";
            const sut = stringCalculator;

            expect(() => sut(input)).toThrow();
        });

        test("given //;\\n1;-2 should throw", () => {
            const input = "//;\n1;-2";
            const sut = stringCalculator;

            expect(() => sut(input)).toThrow();
        });

        test("given //\\n\\n1\\n2\\n-999\\n1235 should throw", () => {
            const input = "//\n\n1\n2\n-999\n1235";
            const sut = stringCalculator;

            expect(() => sut(input)).toThrow();
        });
    });
});
