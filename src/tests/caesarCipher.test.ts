import { describe, test, expect } from "vitest";
import { caesarCipher } from "../caesarCipher";

/*
 TESTS LIST
 ----------
 - Will correctly decipher a message given a string and a nrOfShifts argument
 - Will shift the letters by 1 if no nrOfShifts argument is given
 - Will throw if a negative number is passed as nrOfShifts argument
 - Will return the same string if 0 is passed as nrOfShifts argument
 - Will correctly wrap the letters
 - Will correctly ignore anything other than letters
 - The returned message should preserve case
*/

describe("caesarCipher will", () => {
    test("throw if negative number is passed as nrOfShifts argument", () => {
        expect(() => caesarCipher("A phrase", -1)).toThrow("nrOfShifts can't be less than zero");
    });
});
