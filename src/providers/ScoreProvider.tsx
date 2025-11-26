import {ScoreContext, type ScoreContextType} from "@/context/ScoreContext.tsx";
import {type ReactNode, useState} from "react";
import {useLocalStorage} from "@/hooks/useLocalStorage.tsx";
import type {ScoreboardType, ScoreboardTypeWithRank} from "@/types/ScoreBoardType.ts";

export function ScoreProvider({ children }: { children: ReactNode }) {
    const [scoreBoard] = useLocalStorage<ScoreboardType[]>('scoreboard', [])
    const [filteredScoreboards, setFilteredScoreboards] = useState<'STREAK' | "DATE">("STREAK")

    const sortedScoreboardByWinStreak: ScoreboardType[] = [...scoreBoard].sort(
        (a, b) => b.winStreak - a.winStreak
    );

    const scoreboardWithRank: ScoreboardTypeWithRank[] = sortedScoreboardByWinStreak.reduce(
        (acc: ScoreboardTypeWithRank[], curr: ScoreboardType, idx: number) => {
            if (idx === 0) {
                return [...acc, {...curr, rank: 1}];
            }

            const prevScore = acc[idx - 1];
            const rank =
                curr.winStreak === prevScore.winStreak ? prevScore.rank : idx + 1;

            return [...acc, {...curr, rank}];
        },
        []
    );

    const sortedScoreboardByTimestamp = [...scoreBoard].sort(
        (a, b) => b.timestamp - a.timestamp
    );

    const filteredScoreboard =
        filteredScoreboards === "STREAK"
            ? scoreboardWithRank
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