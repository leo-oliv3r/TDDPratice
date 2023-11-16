import { describe, expect, test } from "vitest";
import { createArrayReport } from "../analyzeArray";

describe("createArrayReport will", () => {
    test("given an empty array, return null for properties and length 0", () => {
        expect(() => createArrayReport([])).toThrowError("Array is empty");
    });

    test("correctly analyze with only infinity and NaN", () => {
        expect(() => createArrayReport([NaN, Infinity])).toThrowError("Array is empty");
    });

    test("correctly calculate biggest number", () => {
        expect(createArrayReport([25, 123, 125])).toHaveProperty("max", 125);
    });

    test("correctly calculate biggest number with decimals", () => {
        expect(createArrayReport([25, 125, 125.5])).toHaveProperty("max", 125.5);
    });

    test("correctly calculate the lowest number", () => {
        expect(createArrayReport([12, 15, 36])).toHaveProperty("min", 12);
    });

    test("correctly calculate the lowest number with decimals", () => {
        expect(createArrayReport([11.5, 12, 15, 36])).toHaveProperty("min", 11.5);
    });

    test("correctly analyze array with only one value", () => {
        expect(createArrayReport([7])).toEqual({ average: 7, min: 7, max: 7, length: 1 });
    });

    test("correctly analyze array with only one decimal value", () => {
        expect(createArrayReport([7.5])).toEqual({ average: 7.5, min: 7.5, max: 7.5, length: 1 });
    });

    test("correctly analyze array with positive integers", () => {
        expect(createArrayReport([15, 25, 35, 75])).toEqual({
            average: 37.5,
            min: 15,
            max: 75,
            length: 4,
        });
    });

    test("correctly analyze array with negative integers", () => {
        expect(createArrayReport([-15, -35, -22, -50])).toEqual({
            average: -30.5,
            min: -50,
            max: -15,
            length: 4,
        });
    });

    test("correctly analyze array with mixed values", () => {
        expect(createArrayReport([-15, 123, 12.4, Infinity, NaN, -15.6, 10])).toEqual({
            average: 22.96,
            min: -15.6,
            max: 123,
            length: 5,
        });
    });
});
