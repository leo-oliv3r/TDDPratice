import { Copier, Destination, Source } from "./character-copy";

describe("character-copy", () => {
    function createMockSource(chars: string[]) {
        const mockReadChar = jest.fn();
        for (const char of chars) {
            mockReadChar.mockReturnValueOnce(char);
        }

        mockReadChar.mockReturnValue("\n");

        const src: Source = {
            readChar: mockReadChar,
        };
        return src;
    }

    function createMockDestination() {
        const writtenCharacters: string[] = [];
        const mockWriteChar = jest.fn((c) => writtenCharacters.push(c));
        const dest = {
            writeChar: mockWriteChar,
            writtenCharacters,
        };
        return dest;
    }

    function createCopier(src: Source, dest: Destination) {
        return new Copier(src, dest);
    }

    describe("copy", () => {
        test("nothing on source", () => {
            const input: string[] = [];
            const src = createMockSource(input);
            const dest = createMockDestination();

            const sut = createCopier(src, dest);

            sut.copy();

            expect(dest.writeChar).toHaveBeenCalledTimes(0);
        });

        describe("single char with newline", () => {
            test.each([{ char: "a" }, { char: "b" }, { char: "!" }])(
                "char : $char",
                ({ char }) => {
                    const src = createMockSource([char]);
                    const dest = createMockDestination();
                    const sut = createCopier(src, dest);

                    sut.copy();

                    expect(dest.writeChar).toHaveBeenCalledTimes(1);
                    expect(dest.writeChar).toHaveBeenCalledWith(char);
                }
            );
        });

        describe("multiple chars with newline", () => {
            test.each([
                { chars: ["a", "b", "c"] },
                { chars: ["a", "b", "c", "d", "e"] },
                { chars: ["c", "b", "a"] },
                { chars: ["a", "b", "2", "!", "%"] },
            ])("chars : $chars", ({ chars }) => {
                const src = createMockSource(chars);
                const dest = createMockDestination();

                const sut = createCopier(src, dest);

                sut.copy();

                expect(dest.writeChar).toHaveBeenCalledTimes(chars.length);
                for (const char of chars) {
                    expect(dest.writeChar).toHaveBeenCalledWith(char);
                }
            });
        });

        describe("stop at newline", () => {
            test("[a, \\n, c]", () => {
                const input = ["a", "\n", "c"];
                const expectec = ["a"];

                const src = createMockSource(input);
                const dest = createMockDestination();

                const sut = createCopier(src, dest);

                sut.copy();

                expect(dest.writeChar).toHaveBeenCalledTimes(1);
                expect(dest.writeChar).toHaveBeenCalledWith(input[0]);
                expect(dest.writtenCharacters).toStrictEqual(expectec);
            });

            test("[a, b ,\\n, d]", () => {
                const input = ["a", "b", "\n", "d"];
                const expected = ["a", "b"];

                const src = createMockSource(input);
                const dest = createMockDestination();

                const sut = createCopier(src, dest);

                sut.copy();

                expect(dest.writeChar).toHaveBeenCalledTimes(2);
                expect(dest.writeChar).toHaveBeenCalledWith(input[0]);
                expect(dest.writeChar).toHaveBeenCalledWith(input[1]);
                expect(dest.writtenCharacters).toStrictEqual(expected);
            });
        });

        describe("write in correct order", () => {
            test.each([
                { chars: ["a", "a", "a", "b", "c"] },
                { chars: ["c", "c", "b", "b", "b", "d", "e"] },
            ])("chars : $chars", ({ chars }) => {
                const src = createMockSource(chars);
                const dest = createMockDestination();

                const sut = createCopier(src, dest);

                sut.copy();

                expect(dest.writeChar).toHaveBeenCalledTimes(chars.length);
                for (const char of chars) {
                    expect(dest.writeChar).toHaveBeenCalledWith(char);
                }
                expect(dest.writtenCharacters).toStrictEqual(chars);
            });
        });
    });
});
