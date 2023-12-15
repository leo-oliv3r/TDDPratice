export function stringCalculator(input: string): number | Error {
    if (input === "") return 0;

    if (input.startsWith("//")) {
        input = removePrefix(input);
        const delimiter = getDelimiterValue(input);
        const numbersStrArray = removeDelimiters(input, delimiter);

        const negativeNumbers = getNegativeNumbers(numbersStrArray);
        if (negativeNumbers.length > 0) {
            throw new Error(`Can\'t use negative numbers : ${negativeNumbers}`);
        }

        return sumNumbers(numbersStrArray);
    }

    const inputWithoutDemiliters = removeDelimiters(input);

    const negativeNumbers = getNegativeNumbers(inputWithoutDemiliters);
    if (negativeNumbers.length > 0) {
        throw new Error(`Can\'t use negative numbers : ${negativeNumbers}`);
    }

    return sumNumbers(inputWithoutDemiliters);
}

function getDelimiterValue(input: string) {
    return input[0];
}

function removePrefix(input: any) {
    return input.slice(2);
}

function getNegativeNumbers(numbersStrArray: string[]): number[] {
    return numbersStrArray.map((str) => Number.parseInt(str)).filter((nr) => nr < 0);
}

function removeDelimiters(input: string, delimiter: string = ","): string[] {
    const regex = new RegExp(`[\n|${delimiter}]`);
    return input.split(regex).filter((truthy) => truthy);
}

function sumNumbers(numbersStrArray: string[]) {
    function strToNr(str: string) {
        const num = Number.parseInt(str);
        if (num > 1000) {
            return 0;
        }
        return num;
    }

    return numbersStrArray.map(strToNr).reduce((acc, n) => acc + n);
}
