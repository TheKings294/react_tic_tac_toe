import {createContext} from "react";
import type {BoardType, History, Move, Pattern} from "../types/BoardType.ts";
import {INITIAL_BOARD} from "../constant/Constant.ts";
import type {PlayerType} from "@/types/PlayerType.ts";

export type BoardContextType = {
    board: BoardType;
    curentPlayer: string;
    winCondition: (board: BoardType) => void;
    saveGame: () => void;
    loadGame: () => void;
    leaveGame: () => void;
    isFinished: boolean;
    timer: number;
    playerShot: number;
    move: (movemnt: Move) => void;
    history: History;
    modalIsOpen: boolean;
    winPattern: Pattern | undefined;
    gameMode: number;
    players: PlayerType[];
    setPlayers: (players: PlayerType[]) => void;
    setGameMode: (gameMdoe: number) => void;
}

export const BoardContext = createContext<BoardContextType>({
    board: INITIAL_BOARD,
    curentPlayer: "X",
    winCondition: () => {},
    saveGame: () => {},
    loadGame: () => {},
    leaveGame: () => {},
    isFinished: false,
    timer: 0,
    playerShot: 0,
    move: () => {},
    history:  [],
    modalIsOpen: false,
    winPattern: undefined,
    gameMode: 1,
    players: [],
    setPlayers: (players: PlayerType[]) => {
        return players;
    },
    setGameMode: (gameMdoe: number) => {
        return gameMdoe;
    }
})