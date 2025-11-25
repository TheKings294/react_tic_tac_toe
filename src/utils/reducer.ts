import type {BoardType} from "@/types/BoardType.ts";
import {INITIAL_BOARD} from "@/constant/Constant.ts";
import type {BoardContextType} from "@/context/BoardContext.tsx";

export interface BoardAction {
    type: string;
    payload: Partial<BoardContextType>;
}

export const initialState: BoardContextType = {
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
    move: () => {},
    history: undefined,
    modalIsOpen: false,
    winPattern: undefined
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
                isFinished: true,
            }
        default:
            return state;
    }
}