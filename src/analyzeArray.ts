interface IArrayReport {
    average: number | null;
    min: number | null;
    max: number | null;
    length: number;
}

class ArrayReport implements IArrayReport {
    public readonly average: number | null;
    public readonly min: number | null;
    public readonly max: number | null;
    public readonly length: number;

    private isArrayEmpty(arr: number[]) {
        return arr.length === 0;
    }

    private removeInvalidNumbers(arr: number[]) {
        return arr.filter((nr) => isFinite(nr));
    }

    private findHighestNr(arr: number[]) {
        return Math.max(...arr);
    }

    private findLowestNr(arr: number[]) {
        return Math.min(...arr);
    }

    private calculateAverage(arr: number[]) {
        const sum = arr.reduce((acc, curr) => acc + curr, 0);
        return sum / arr.length;
    }

    constructor(arr: number[]) {
        arr = this.removeInvalidNumbers(arr);

        if (this.isArrayEmpty(arr)) {
            throw new Error("Array is empty");
        }

        this.average = this.calculateAverage(arr);
        this.max = this.findHighestNr(arr);
        this.min = this.findLowestNr(arr);
        this.length = arr.length;
    }
}

export function createArrayReport(nrArray: number[]) {
    return new ArrayReport(nrArray);
}
