import type {ReactNode} from "react";
import {BoardContext} from "@/context/BoardContext.tsx";
import {INITIAL_BOARD} from "@/constant/Constant.ts";

export function BoardProvider({children}: {children: ReactNode}) {
    const contextValues = {
        INITIAL_BOARD,
    }
    return (
        <BoardContext.Provider value={contextValues}>
            {children}
        </BoardContext.Provider>
    )
}