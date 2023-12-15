import { ageCalculator } from "./age-calculator";

describe("ageCalculator", () => {
    describe("invalid input", () => {
        describe("birthday is after targetDate OR targetDate is before birthday", () => {
            test.each([
                {
                    birthday: "1995/04/26",
                    targetDate: "1990/11/26",
                },
                {
                    birthday: "1960/01/31",
                    targetDate: "1955/03/21",
                },
                {
                    birthday: "2015/03/10",
                    targetDate: "2001/03/21",
                },
            ])(
                "given Birthday $birthday and target date $targetDate an error should return thrown",
                ({ birthday, targetDate }) => {
                    const sut = ageCalculator;

                    expect(() => sut(new Date(birthday), new Date(targetDate))).toThrow();
                }
            );
        });
    });

    describe("valid input", () => {
        describe("birthday and targetDate are the same", () => {
            test.each([
                { birthday: "2015/03/10", targetDate: "2015/03/10", expected: 0 },
                { birthday: "2017/05/10", targetDate: "2017/05/10", expected: 0 },
                { birthday: "2014/05/10", targetDate: "2017/05/10", expected: 3 },
            ])(
                "given Birthday $birthday and target date $targetDate should return $expected",
                ({ birthday, targetDate, expected }) => {
                    const sut = ageCalculator;

                    const acual = sut(new Date(birthday), new Date(targetDate));

                    expect(acual).toBe(expected);
                }
            );
        });

        describe("birthday and targetDate are have same month and day but different year", () => {
            test.each([
                { birthday: "2014/05/10", targetDate: "2017/05/10", expected: 3 },
                { birthday: "2018/01/01", targetDate: "2020/01/01", expected: 2 },
            ])(
                "given Birthday $birthday and target date $targetDate should return $expected",
                ({ birthday, targetDate, expected }) => {
                    const sut = ageCalculator;

                    const acual = sut(new Date(birthday), new Date(targetDate));

                    expect(acual).toBe(expected);
                }
            );
        });

        describe("already had birthday in targetDate year", () => {
            test.each([
                { birthday: "1995/04/26", targetDate: "2023/04/27", expected: 28 },
                { birthday: "1950/01/30", targetDate: "2001/01/31", expected: 51 },
                { birthday: "2015/05/05", targetDate: "2022/07/10", expected: 7 },
                { birthday: "2015/01/31", targetDate: "2022/02/01", expected: 7 },
            ])(
                "given Birthday $birthday and target date $targetDate should return $expected",
                ({ birthday, targetDate, expected }) => {
                    const sut = ageCalculator;

                    const acual = sut(new Date(birthday), new Date(targetDate));

                    expect(acual).toBe(expected);
                }
            );
        });

        describe("still did not had birthday in targetDate year", () => {
            test.each([
                { birthday: "1995/04/26", targetDate: "2005/04/25", expected: 9 },
                { birthday: "1990/03/25", targetDate: "2010/02/25", expected: 19 },
                { birthday: "2015/03/10", targetDate: "2024/03/09", expected: 8 },
                { birthday: "2015/01/02", targetDate: "2021/01/01", expected: 5 },
                { birthday: "2015/02/01", targetDate: "2021/01/31", expected: 5 },
            ])(
                "given Birthday $birthday and target date $targetDate should return $expected",
                ({ birthday, targetDate, expected }) => {
                    const sut = ageCalculator;

                    const acual = sut(new Date(birthday), new Date(targetDate));

                    expect(acual).toBe(expected);
                }
            );
        });
    });
});
