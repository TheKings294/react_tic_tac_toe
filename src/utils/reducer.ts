import type {BoardType} from "@/types/BoardType.ts";
import {INITIAL_BOARD} from "@/constant/Constant.ts";
import type {BoardContextType} from "@/context/BoardContext.tsx";
import type {PlayerType} from "@/types/PlayerType.ts";

export interface BoardAction {
    type: string;
    payload: Partial<BoardContextType>;
}

export const initialState: BoardContextType = {
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
    },
    winner: undefined,
    nextGame: () => {}
}

export function reducer(state: BoardContextType, action: BoardAction): BoardContextType {
    switch (action.type) {
        case 'set_board':
            return {
                ...state,
                board: action.payload.board as BoardType,
            };
        case 'switch_player':
            return {
                ...state,
                curentPlayer: action.payload.curentPlayer as string,
            };
        case 'switch_modal':
            return {
                ...state,
                modalIsOpen: action.payload.modalIsOpen as boolean,
            }
        case 'set_win_pattern':
            return {
                ...state,
                winPattern: action.payload.winPattern,
            }
        case 'set_finish' :
            return {
                ...state,
                isFinished: action.payload.isFinished as boolean,
            }
        case 'set_history' :
            if (!action.payload.history) {
                return state
            }
            return {
                ...state,
                history: action.payload.history
            }
        case 'set_players' :
            if (!action.payload.players) {
                return state
            }
            return {
                ...state,
                players: action.payload.players
            }
        case 'set_game_mode':
            if (!action.payload.gameMode) {
                return state
            }
            return {
                ...state,
                gameMode: action.payload.gameMode
            }
        case 'set_winner':
            return {
                ...state,
                winner: action.payload.winner
            }
        default:
            return state;
    }
}