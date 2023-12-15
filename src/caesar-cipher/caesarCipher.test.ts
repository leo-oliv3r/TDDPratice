import { describe, test, expect } from "vitest";
import { caesarCipher } from "./caesarCipher";

describe("caesarCipher will", () => {
    test("throw if negative number is passed as nrOfShifts argument", () => {
        expect(() => caesarCipher("A phrase", -1)).toThrow("nrOfShifts can't be less than zero");
    });

    test("return the same string if 0 is passed as nrOfShifts argument", () => {
        expect(caesarCipher("Some text", 0)).toBe("Some text");
    });

    test("nrOfShifts defaults to 1 if just one argument is passed", () => {
        expect(caesarCipher("Another text")).toBe("Bopuifs ufyu");
    });

    test("round nrOfShits with pass a non integet", () => {
        expect(caesarCipher("Another text", 1.3)).toBe("Bopuifs ufyu");
    });

    test("will ignore chars that are not letters", () => {
        expect(caesarCipher("zAc12!#", 1)).toBe("aBd12!#");
    });

    test("will respect case", () => {
        expect(caesarCipher("AbCdEzD", 1)).toBe("BcDeFaE");
    });

    test("will correctly wrap the letters around the alphabet", () => {
        expect(caesarCipher("XYZ", 3)).toBe("ABC");
    });

    test("will correctly shift the letters N times", () => {
        expect(caesarCipher("This is a sentence", 16)).toBe("Jxyi yi q iudjudsu");
    });

    test("will correctly shift the letters N times", () => {
        expect(caesarCipher("This is a sentence", 183)).toBe("Uijt jt b tfoufodf");
    });

    test("preserves spaces and punctuation", () => {
        expect(caesarCipher("Hello, World!", 1)).toBe("Ifmmp, Xpsme!");
    });
});
