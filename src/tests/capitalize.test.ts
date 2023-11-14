import { describe, expect, test } from "vitest";
import { capitalizeFirstLetter } from "../capitalize";

describe("capitalizeFirstLetter will", () => {
    test("capitalize the first letter", () => {
        expect(capitalizeFirstLetter("some phrase")).toBe("Some phrase");
    });

    test("return an empty string when given an empty string", () => {
        expect(capitalizeFirstLetter("")).toBe("");
    });

    test("trim white spaces", () => {
        expect(capitalizeFirstLetter(" some phrase")).toBe("Some phrase");
    });
});
