import {createContext, type Dispatch, type SetStateAction} from "react";
import type {ScoreboardType} from "@/types/ScoreBoardType.ts";

export type ScoreContextType = {
    filter: "STREAK" | "DATE";
    scoreboard: ScoreboardType[];
    filteredScoreboard: ScoreboardType[];
    setFilter: Dispatch<SetStateAction<"STREAK" | "DATE">>;
}

export const ScoreContext = createContext<ScoreContextType>({
    filter: "STREAK",
    scoreboard: [],
    filteredScoreboard: [],
    setFilter: () => {
    }
})