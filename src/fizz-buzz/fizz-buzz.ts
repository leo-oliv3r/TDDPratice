interface IFizzBuzz {
    play(number: number): string;
}

export class FizzBuzz implements IFizzBuzz {
    public play(nr: number): string {
        return this.constructResponse(nr);
    }

    private constructResponse(nr: number) {
        let response: string[] = [];
        if (nr % 3 === 0) response.push("Fizz");
        if (nr % 5 === 0) response.push("Buzz");
        if (this.isPrime(nr)) response.push("Whiz");
        return response.length > 0 ? response.join("") : nr.toString();
    }

    private isPrime(nr: number): boolean {
        if (nr === 2) return true;

        if (nr < 2 || nr % 2 === 0) return false;

        for (let i = 3; i < nr / 2; i++) {
            if (nr % i === 0) return false;
        }

        return true;
    }
}
