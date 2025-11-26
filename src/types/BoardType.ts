import type {PlayerType} from "@/types/PlayerType.ts";

export type BoardType = string[][];

export type Move = {x: number, y: number};
export type History = {player: PlayerType, move: Move}[];

export type Coord = [number, number];
export type Pattern = [Coord, Coord, Coord];
