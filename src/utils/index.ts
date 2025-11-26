import type {ScoreboardType, ScoreboardTypeWithRank} from "@/types/ScoreBoardType.ts";

export const containsRank = (scoreboard: ScoreboardTypeWithRank[] | ScoreboardType[]): scoreboard is ScoreboardTypeWithRank[] => {
    return (scoreboard as ScoreboardTypeWithRank[])[0].rank !== undefined;
}