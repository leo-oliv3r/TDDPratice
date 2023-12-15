import { FizzBuzz } from "./fizz-buzz";

describe("fizz-buzz", () => {
    describe("fizz", () => {
        test.each([{ input: 3 }, { input: 6 }, { input: 9 }])("$input", ({ input }) => {
            const expected = "Fizz";
            const sut = new FizzBuzz();

            const actual = sut.play(input);

            expect(actual).toContain(expected);
        });
    });

    describe("buzz", () => {
        test.each([{ input: 5 }, { input: 10 }, { input: 20 }])("$input", ({ input }) => {
            const expected = "Buzz";
            const sut = new FizzBuzz();

            const actual = sut.play(input);

            expect(actual).toContain(expected);
        });
    });

    describe("fizzbuzz", () => {
        test.each([{ input: 15 }, { input: 30 }, { input: 45 }])("$input", ({ input }) => {
            const expected = "FizzBuzz";
            const sut = new FizzBuzz();

            const actual = sut.play(input);

            expect(actual).toContain(expected);
        });
    });

    describe("prime numbers contain Whiz", () => {
        test.each([{ input: 2 }, { input: 17 }, { input: 19 }, { input: 23 }])(
            "$input",
            ({ input }) => {
                const expected = "Whiz";
                const sut = new FizzBuzz();

                const actual = sut.play(input);

                expect(actual).toContain(expected);
            }
        );
    });

    describe("any other number", () => {
        test.each([{ input: 76 }, { input: 26 }, { input: 38 }, { input: 44 }])(
            "$input",
            ({ input }) => {
                const expected = input.toString();
                const sut = new FizzBuzz();

                const actual = sut.play(input);

                expect(actual).toContain(expected);
            }
        );
    });
});
