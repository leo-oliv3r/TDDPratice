const isLetter = (char: string) => /[a-zA-Z]/.test(char);

const shiftChar = (char: string, key: number) => {
    // Not possible to be undefined in this case
    const currentCharCode = char.codePointAt(0) as number;

    if (/[A-Z]/.test(char)) {
        // 65 is "A" in ASCII
        const shiftedCharCode = ((currentCharCode - 65 + key) % 26) + 65;
        return String.fromCharCode(shiftedCharCode);
    }

    // 97 is "a" in ASCII
    const shiftedCharCode = ((currentCharCode - 97 + key) % 26) + 97;
    return String.fromCharCode(shiftedCharCode);
};

export function caesarCipher(text: string, nrOfShifts: number = 1) {
    if (nrOfShifts < 0) {
        throw new Error("nrOfShifts can't be less than zero");
    }

    if (nrOfShifts === 0) return text;

    nrOfShifts = Math.round(nrOfShifts);

    let shiftedText: string[] = [];
    text.split("").forEach((char) => {
        if (isLetter(char)) {
            shiftedText.push(shiftChar(char, nrOfShifts));
        } else {
            shiftedText.push(char);
        }
    });

    return shiftedText.join("");
}
