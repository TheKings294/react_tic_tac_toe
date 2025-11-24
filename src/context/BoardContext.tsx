import {createContext} from "react";
import type {BoardType, History, Move} from "../types/BoardType.ts";
import {INITIAL_BOARD} from "../constant/Constant.ts";

export type BoardContextType = {
    board: BoardType;
    algo: () => void;
    curentPlayer: string;
    winCondition: () => void;
    saveGame: () => void;
    loadGame: () => void;
    leaveGame: () => void;
    isFinished: boolean;
    timer: number;
    playerShot: number;
    move: (movemnt: Move) => void;
    history: History | undefined;
}

export const BoardContext = createContext<BoardContextType>({
    board: INITIAL_BOARD,
    algo: () => {},
    curentPlayer: "X",
    winCondition: () => {},
    saveGame: () => {},
    loadGame: () => {},
    leaveGame: () => {},
    isFinished: false,
    timer: 0,
    playerShot: 0,
    move: (movement: Move) => {},
    history: undefined,
})