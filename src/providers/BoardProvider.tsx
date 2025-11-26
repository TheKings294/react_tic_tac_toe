import {type ReactNode, useEffect, useReducer} from "react";
import {BoardContext, type BoardContextType} from "@/context/BoardContext.tsx";
import {reducer, initialState as boardInitialState} from "@/utils/reducer.ts";
import {easyBot} from "@/game-logic/easyBot.ts";
import type {BoardType, GameStats, History, Move, Pattern} from "@/types/BoardType.ts";
import type {PlayerType} from "@/types/PlayerType.ts";
import {useLocalStorage} from "@/hooks/useLocalStorage.tsx";
import {INITIAL_BOARD} from "@/constant/Constant.ts";
import type {ScoreboardType} from "@/types/ScoreBoardType.ts";

export function BoardProvider({children}: {children: ReactNode}) {
    const [state, dispatch] = useReducer(reducer, boardInitialState)
    const [gameState, setGameState] = useLocalStorage<GameStats>("gameState", {
        username: "",
        gameMode: 1,
        player1Wins: 0,
        ties: 0,
        player2Wins: 0,
        playerTurn: "X"
    })
    const [, setScoreboard] = useLocalStorage<ScoreboardType[]>("scoreboard", []);

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

    const setPlayersFunction = (players: PlayerType[]) => {
        setGameState({
            ...gameState,
            username: players[0].name,
        })
        dispatch({
            type: "set_players",
            payload: {players: players},
        })
    }

    const setGameModeFunction = (gameMode: number) => {
        dispatch({
            type: "set_game_mode",
            payload: {gameMode: gameMode},
        })
    }

    const switchPlayer = (): void => {
        if (state.winner?.name) return;
        const notCurentPlayer = state.curentPlayer === "X" ? "O" : "X"
        setGameState({
            ...gameState,
            playerTurn: notCurentPlayer,
        })

        dispatch({
            type: "switch_player",
            payload: {curentPlayer: notCurentPlayer}
        })
    }

    const nextGame = () => {
        SwitchModalState()
        dispatch({
            type: 'set_finish',
            payload: {isFinished: false}
        })
        dispatch({
            type: 'set_winner',
            payload: {winner: undefined},
        })
        dispatch({
            type: "switch_player",
            payload: {curentPlayer: "X"}
        })
    }

    const checkIfPlayeMoreThan3 = (historic: History) => {
        const playerMoves = historic.filter(move => move.player.name === state.curentPlayer)
        return playerMoves.length > 3
    }

    const placeMove = (move: Move): void => {
        const newBoard: BoardType = state.board.map((row, rowIndex) => {
            return row.map((line, lineIndex) =>
                rowIndex === move.y && lineIndex === move.x ? state.curentPlayer : line
            )
        })

        if (state.gameMode === 2) {
            const newHistoryMove: History = [...state.history,  {
                player: {name: state.curentPlayer},
                move: move
            }]


            if (newHistoryMove.length > 3 && checkIfPlayeMoreThan3(newHistoryMove)) {
                const oldesMove = newHistoryMove.shift()
                if (oldesMove) {
                    newBoard[oldesMove.move.x][oldesMove.move.y] = "#"
                }
            }

            dispatch({
                type: "set_history",
                payload: {history: newHistoryMove},
            })
        }

        dispatch({
            type: "set_board",
            payload: {board: newBoard}
        })

        if (!checkIfAsWin(newBoard)) {
            switchPlayer()
        }
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
        if (!winner) return false;

        let newGameState = structuredClone(gameState);
        newGameState.playerTurn = "X";

        if ("O" === winner.player) {
            if (state.gameMode === 1) {
                newGameState = {
                    ...newGameState,
                    player1Wins: 0,
                    ties: 0,
                    player2Wins: 0,
                    playerTurn: "X"
                };

                const newScoreboard: ScoreboardType = {
                    username: gameState.username,
                    gameMode: gameState.gameMode,
                    winStreak: gameState.player1Wins,
                    timestamp: Date.now(),
                };

                if (newScoreboard.winStreak > 0) {
                    setScoreboard((prevScoreBoard: ScoreboardType[]) => [...prevScoreBoard, newScoreboard]);
                }
            } else {
                newGameState.player2Wins++;
            }
        } else {
            newGameState.player1Wins += 1;
        }

        setGameState(newGameState);
        dispatch({
            type: 'set_winner',
            payload: {winner: {name: winner.player}},
        })
        SwitchModalState()

        dispatch({
            type: "set_win_pattern",
            payload: {winPattern: winner.pattern}
        })
        dispatch({
            type: 'set_finish',
            payload: {isFinished: true}
        })
        dispatch({
            type: "set_history",
            payload: {history: []}
        })

        setTimeout(() => {
            dispatch({
                type: "set_board",
                payload: {board: INITIAL_BOARD}
            })
            dispatch({
                type: "set_win_pattern",
                payload: {winPattern: undefined}
            })
        }, 2000);

        return true;
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
        players: state.players,
        setPlayers: setPlayersFunction,
        setGameMode: setGameModeFunction,
        winner: state.winner,
        nextGame: nextGame,
    }

    useEffect(() => {
        if (state.curentPlayer === 'O' && !state.isFinished && state.players.length === 1) {
            const timer = setTimeout(() => easyBot(state.board, placeMove), 500);
            return () => clearTimeout(timer);
        }
    }, [state.curentPlayer, state.isFinished, state.board, placeMove, state.players]);

    return (
        <BoardContext.Provider value={contextValues}>
            {children}
        </BoardContext.Provider>
    )
}