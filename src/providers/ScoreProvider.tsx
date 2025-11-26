import {ScoreContext, type ScoreContextType} from "@/context/ScoreContext.tsx";
import type {ReactNode} from "react";

export function ScoreProvider({ children }: { children: ReactNode }) {

    const defaultValueScoreContext: ScoreContextType = {

    }
    return (
        <ScoreContext.Provider value={defaultValueScoreContext}>
            {children}
        </ScoreContext.Provider>
    )
}

export default ScoreProvider