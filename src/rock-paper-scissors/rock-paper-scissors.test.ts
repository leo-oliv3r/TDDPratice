// The 3 laws of TDD:
//   1. You are not allowed to write any production code unless it is to make a failing unit test pass.
//   2. You are not allowed to write any more of a unit test than is sufficient to fail; and compilation failures are failures.
//   3. You are not allowed to write any more production code than is sufficient to pass the one failing unit test.
// Red -> Green -> Reflect -> Refactor
// Fake It Green Bar Pattern

import { createRockPaperScissors, Move, Outcome } from "./rock-paper-scissors";

describe("rock-paper-scissors", () => {
    describe("play method", () => {
        describe("paper beats rock", () => {
            test.each([
                { playerMove: Move.Paper, opponentMove: Move.Rock, expected: Outcome.PlayerWins },
                { playerMove: Move.Rock, opponentMove: Move.Paper, expected: Outcome.PlayerLoses },
            ])(
                "Player move: $playerMove, Opponent move: $opponentMove, Expected outcome: $expected",
                ({ playerMove, opponentMove, expected }) => {
                    const sut = createRockPaperScissors();

                    const actual = sut.play(playerMove, opponentMove);

                    expect(actual).toBe(expected);
                }
            );
        });

        describe("scissors beats paper", () => {
            test.each([
                {
                    playerMove: Move.Scissors,
                    opponentMove: Move.Paper,
                    expected: Outcome.PlayerWins,
                },
                {
                    playerMove: Move.Paper,
                    opponentMove: Move.Scissors,
                    expected: Outcome.PlayerLoses,
                },
            ])(
                "Player move: $playerMove, Opponent move: $opponentMove, Expected outcome: $expected",
                ({ playerMove, opponentMove, expected }) => {
                    const sut = createRockPaperScissors();

                    const actual = sut.play(playerMove, opponentMove);

                    expect(actual).toBe(expected);
                }
            );
        });

        describe("rock beats scissors", () => {
            test.each([
                {
                    playerMove: Move.Rock,
                    opponentMove: Move.Scissors,
                    expected: Outcome.PlayerWins,
                },
                {
                    playerMove: Move.Scissors,
                    opponentMove: Move.Rock,
                    expected: Outcome.PlayerLoses,
                },
            ])(
                "Player move: $playerMove, Opponent move: $opponentMove, Expected outcome: $expected",
                ({ playerMove, opponentMove, expected }) => {
                    const sut = createRockPaperScissors();

                    const actual = sut.play(playerMove, opponentMove);

                    expect(actual).toBe(expected);
                }
            );
        });

        describe("tie", () => {
            test.each([
                {
                    playerMove: Move.Rock,
                    opponentMove: Move.Rock,
                    expected: Outcome.Tie,
                },
                {
                    playerMove: Move.Paper,
                    opponentMove: Move.Paper,
                    expected: Outcome.Tie,
                },
                {
                    playerMove: Move.Scissors,
                    opponentMove: Move.Scissors,
                    expected: Outcome.Tie,
                },
            ])(
                "Player move: $playerMove, Opponent move: $opponentMove, Expected outcome: $expected",
                ({ playerMove, opponentMove, expected }) => {
                    const sut = createRockPaperScissors();

                    const actual = sut.play(playerMove, opponentMove);

                    expect(actual).toBe(expected);
                }
            );
        });
    });
});
