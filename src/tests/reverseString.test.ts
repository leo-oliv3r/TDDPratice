import { describe, expect, test } from "vitest";
import { reverseString } from "../reverseString";

describe("reverseString will", () => {
    test("correctly reverse a string", () => {
        expect(reverseString("Some phrase")).toBe("esarhp emoS");
    });

    test("correctly reverse a string", () => {
        expect(reverseString("A even bigger phrase")).toBe("esarhp reggib neve A");
    });
});
