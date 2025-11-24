import {type ReactNode, useReducer} from "react";
import {BoardContext, type BoardContextType} from "@/context/BoardContext.tsx";
import {reducer, initialState as boardInitialState} from "@/utils/reducer.ts";
import {easyBot} from "@/game-logic/easyBot.ts";
import type {BoardType, Move} from "@/types/BoardType.ts";

export function BoardProvider({children}: {children: ReactNode}) {
    const [state, dispatch] = useReducer(reducer, boardInitialState)

    const checkIfIsWin = (): void => void {

    }

    const saveGame = (): void => {

    }

    const leaveGame = () => {

    }

    const switchPlayer = (): void => {
        const notCurentPlayer = state.curentPlayer === "X" ? "O" : "X"

        dispatch({
            type: "switch_player",
            payload: {curentPlayer: notCurentPlayer}
        })
    }

    const placeMove = (move: Move): void => {
        const newBoard: BoardType = state.board.map((row, rowIndex) => {
            return row.map((line, lineIndex) =>
                rowIndex === move.y && lineIndex === move.x ? state.curentPlayer : line
            )
        })

        dispatch({
            type: "set_board",
            payload: {board: newBoard}
        })
        switchPlayer()
    }

    const contextValues: BoardContextType = {
        board: state.board,
        algo: easyBot,
        curentPlayer: state.curentPlayer,
        winCondition: checkIfIsWin,
        saveGame: saveGame,
        loadGame: () => {},
        leaveGame: leaveGame,
        isFinished: state.isFinished,
        timer: state.timer,
        playerShot: state.playerShot,
        move: placeMove,
        history: undefined,
    }

    return (
        <BoardContext.Provider value={contextValues}>
            {children}
        </BoardContext.Provider>
    )
}