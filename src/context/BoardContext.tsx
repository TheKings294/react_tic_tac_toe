import {createContext, type Dispatch, type SetStateAction} from "react";
import type {BoardType} from "../types/BoardType.ts";
import {INITIAL_BOARD} from "../constant/Constant.ts";

export type BoardContextType = {
    board: BoardType;
    setBoard: Dispatch<SetStateAction<BoardType>>;
    algo: () => void;
    curentPlayer: string;
    winCondition: () => void;
    saveGame: () => void;
    loadGame: () => void;
    leaveGame: () => void;
    isFinished: boolean;
    timer: number;
    setTimer: Dispatch<SetStateAction<number>>;
    playerShot: number;
    setPlayerShot: Dispatch<SetStateAction<number>>;
}

export const BoardContext = createContext<BoardContextType>({
    board: INITIAL_BOARD,
    setBoard: () => {

    },
    algo: () => {

    },
    curentPlayer: "X",
    winCondition: () => {

    },
    saveGame: () => {

    },
    loadGame: () => {

    },
    leaveGame: () => {

    },
    isFinished: false,
    timer: 0,
    setTimer: () => {

    },
    playerShot: 0,
    setPlayerShot: () => {

    },
})