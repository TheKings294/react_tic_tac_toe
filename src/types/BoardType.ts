import type {PlayerType} from "@/types/PlayerType.ts";

export type BoardType = string[][];

export type Move = {x: number, y: number};
export type History = {player: PlayerType, move: Move}[];

export type Coord = [number, number];
export type Pattern = [Coord, Coord, Coord];

export type GameStats = {
    username: string,
    gameMode: 1 | 2
    player1Wins: number,
    ties: number,
    player2Wins: number,
    playerTurn: "X" | "O"
}
