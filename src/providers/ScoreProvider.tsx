import {ScoreContext, type ScoreContextType} from "@/context/ScoreContext.tsx";
import {type ReactNode, useState} from "react";
import {useLocalStorage} from "@/hooks/useLocalStorage.tsx";
import type {ScoreboardType} from "@/types/ScoreBoardType.ts";

export function ScoreProvider({ children }: { children: ReactNode }) {
    const [scoreBoard] = useLocalStorage<ScoreboardType[]>('scoreboard', [])
    const [filteredScoreboards, setFilteredScoreboards] = useState<'STREAK' | "DATE">("STREAK")

    const sortedScoreboardByWinStreak: ScoreboardType[] = [...scoreBoard].sort(
        (a, b) => b.winStreak - a.winStreak
    );

    const sortedScoreboardByTimestamp = [...scoreBoard].sort(
        (a, b) => b.timestamp - a.timestamp
    );

    const filteredScoreboard =
        filteredScoreboards === "STREAK"
            ? sortedScoreboardByWinStreak
            : sortedScoreboardByTimestamp;

    const defaultValueScoreContext: ScoreContextType = {
        scoreboard: scoreBoard,
        filteredScoreboard,
        filter: filteredScoreboards,
        setFilter: setFilteredScoreboards,
    }
    return (
        <ScoreContext.Provider value={defaultValueScoreContext}>
            {children}
        </ScoreContext.Provider>
    )
}

export default ScoreProvider