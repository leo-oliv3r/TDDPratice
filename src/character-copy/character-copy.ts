export interface Source {
    readChar(): string;
}

export interface Destination {
    writeChar(char: string): void;
}

export class Copier {
    constructor(private src: Source, private dest: Destination) {}

    copy() {
        let char = this.src.readChar();
        while (char !== "\n") {
            this.dest.writeChar(char);
            char = this.src.readChar();
        }
    }
}
