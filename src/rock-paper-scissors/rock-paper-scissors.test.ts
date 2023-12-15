import { createRockPaperScissors, Move, Outcome } from "./rock-paper-scissors";
import { describe, expect, test } from "vitest";

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
