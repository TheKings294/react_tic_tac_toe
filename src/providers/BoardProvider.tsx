import {type ReactNode, useEffect, useReducer} from "react";
import {BoardContext, type BoardContextType} from "@/context/BoardContext.tsx";
import {reducer, initialState as boardInitialState} from "@/utils/reducer.ts";
import {easyBot} from "@/game-logic/easyBot.ts";
import type {BoardType, Move, Pattern} from "@/types/BoardType.ts";

export function BoardProvider({children}: {children: ReactNode}) {
    const [state, dispatch] = useReducer(reducer, boardInitialState)

    const saveGame = (): void => {

    }

    const leaveGame = () => {

    }

    const SwitchModalState = () => {
        dispatch({
            type: "switch_modal",
            payload: {modalIsOpen: !state.modalIsOpen},
        })
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

        if (state.gameMode === 2) {

        }

        dispatch({
            type: "set_board",
            payload: {board: newBoard}
        })

        checkIfAsWin(newBoard)
        switchPlayer()
    }

    const winPattern: Pattern[] = [
        //lignes
        [[0, 0], [0, 1], [0, 2]],
        [[1, 0], [1, 1], [1, 2]],
        [[2, 0], [2, 1], [2, 2]],
        // Colonnes
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],
        // Diagonales
        [[0, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 1], [2, 0]]
    ]

    const winningChecker = (board: BoardType) => {
        for (const pattern of winPattern) {
            const [[x1, y1], [x2, y2], [x3, y3]] : Pattern = pattern;

            const IsWin =
                board[x1][y1] !== "#" &&
                board[x1][y1] === board[x2][y2] &&
                board[x1][y1] === board[x3][y3];

            if (!IsWin) continue;
            return {pattern, player: board[x1][y1]}
        }
    }
    
    const checkIfAsWin = (board: BoardType) => {
        const winner = winningChecker(board);

        if (winner) {
            SwitchModalState()
            dispatch({
                type: "set_win_pattern",
                payload: {winPattern: winner.pattern}
            })
            dispatch({
                type: 'set_finish',
                payload: {isFinished: true}
            })
        }
    }

    const contextValues: BoardContextType = {
        board: state.board,
        curentPlayer: state.curentPlayer,
        winCondition: checkIfAsWin,
        saveGame: saveGame,
        loadGame: () => {},
        leaveGame: leaveGame,
        isFinished: state.isFinished,
        timer: state.timer,
        playerShot: state.playerShot,
        move: placeMove,
        history: state.history,
        modalIsOpen: state.modalIsOpen,
        winPattern: state.winPattern,
        gameMode: state.gameMode,
    }

    useEffect(() => {
        if (state.curentPlayer === 'O' && !state.isFinished && state.gameMode === 1) {
            const timer = setTimeout(() => easyBot(state.board, placeMove), 500);
            return () => clearTimeout(timer);
        }
    }, [state.curentPlayer, state.isFinished, state.board, placeMove, state.gameMode]);

    return (
        <BoardContext.Provider value={contextValues}>
            {children}
        </BoardContext.Provider>
    )
}